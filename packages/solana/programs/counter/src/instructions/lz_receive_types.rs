use crate::*;
use oapp::endpoint_cpi::{get_accounts_for_clear, get_accounts_for_send_compose, LzAccount};
use oapp::{endpoint::ID as ENDPOINT_ID, LzReceiveParams};

/// LzReceiveTypes instruction provides a list of accounts that are used in the LzReceive
/// instruction. The list of accounts required by this LzReceiveTypes instruction can be found
/// from the specific PDA account that is generated by the LZ_RECEIVE_TYPES_SEED.
#[derive(Accounts)]
pub struct LzReceiveTypes<'info> {
    #[account(seeds = [COUNT_SEED, &count.id.to_be_bytes()], bump = count.bump)]
    pub count: Account<'info, Count>,
}

impl LzReceiveTypes<'_> {
    /// The list of accounts should follow the rules below:
    /// 1. Include all the accounts that are used in the LzReceive instruction, including the
    /// accounts that are used by the Endpoint program.
    /// 2. Set the account is a signer with ZERO address if the LzReceive instruction needs a payer
    /// to pay fee, like rent.
    /// 3. Set the account is writable if the LzReceive instruction needs to modify the account.
    pub fn apply(
        ctx: &Context<LzReceiveTypes>,
        params: &LzReceiveParams,
    ) -> Result<Vec<LzAccount>> {
        // There are two accounts that are used in the LzReceive instruction,
        // except those accounts for endpoint program.
        // The first account is the count account, that is the fixed one.
        let count = ctx.accounts.count.key();

        // The second account is the remote account, we find it by the params.src_eid.
        let seeds = [REMOTE_SEED, &count.to_bytes(), &params.src_eid.to_be_bytes()];
        let (remote, _) = Pubkey::find_program_address(&seeds, ctx.program_id);

        let mut accounts = vec![
            // count
            LzAccount { pubkey: count, is_signer: false, is_writable: true },
            // remote
            LzAccount { pubkey: remote, is_signer: false, is_writable: false },
        ];

        // append the accounts for the clear ix
        let accounts_for_clear = get_accounts_for_clear(
            ENDPOINT_ID,
            &count,
            params.src_eid,
            &params.sender,
            params.nonce,
        );
        accounts.extend(accounts_for_clear);

        // if the message type is composed, we need to append the accounts for the composing ix
        let is_composed = msg_codec::msg_type(&params.message) == msg_codec::COMPOSED_TYPE;
        if is_composed {
            let accounts_for_composing = get_accounts_for_send_compose(
                ENDPOINT_ID,
                &count,
                &count, // self
                &params.guid,
                0,
                &params.message,
            );
            accounts.extend(accounts_for_composing);
        }

        Ok(accounts)
    }
}
