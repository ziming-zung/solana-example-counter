/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import * as beet from '@metaplex-foundation/beet'

/**
 * Arguments used to create {@link LzComposeTypesAccounts}
 * @category Accounts
 * @category generated
 */
export type LzComposeTypesAccountsArgs = {
  count: web3.PublicKey
}

export const lzComposeTypesAccountsDiscriminator = [
  157, 200, 178, 122, 8, 235, 148, 103,
]
/**
 * Holds the data for the {@link LzComposeTypesAccounts} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class LzComposeTypesAccounts implements LzComposeTypesAccountsArgs {
  private constructor(readonly count: web3.PublicKey) {}

  /**
   * Creates a {@link LzComposeTypesAccounts} instance from the provided args.
   */
  static fromArgs(args: LzComposeTypesAccountsArgs) {
    return new LzComposeTypesAccounts(args.count)
  }

  /**
   * Deserializes the {@link LzComposeTypesAccounts} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [LzComposeTypesAccounts, number] {
    return LzComposeTypesAccounts.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link LzComposeTypesAccounts} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<LzComposeTypesAccounts> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(
        `Unable to find LzComposeTypesAccounts account at ${address}`
      )
    }
    return LzComposeTypesAccounts.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      '2tLJfE12h5RY7vJqK6i41taeg8ejzigoFXduBanDV4Cu'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(
      programId,
      lzComposeTypesAccountsBeet
    )
  }

  /**
   * Deserializes the {@link LzComposeTypesAccounts} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(
    buf: Buffer,
    offset = 0
  ): [LzComposeTypesAccounts, number] {
    return lzComposeTypesAccountsBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link LzComposeTypesAccounts} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return lzComposeTypesAccountsBeet.serialize({
      accountDiscriminator: lzComposeTypesAccountsDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link LzComposeTypesAccounts}
   */
  static get byteSize() {
    return lzComposeTypesAccountsBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link LzComposeTypesAccounts} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      LzComposeTypesAccounts.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link LzComposeTypesAccounts} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === LzComposeTypesAccounts.byteSize
  }

  /**
   * Returns a readable version of {@link LzComposeTypesAccounts} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      count: this.count.toBase58(),
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const lzComposeTypesAccountsBeet = new beet.BeetStruct<
  LzComposeTypesAccounts,
  LzComposeTypesAccountsArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['count', beetSolana.publicKey],
  ],
  LzComposeTypesAccounts.fromArgs,
  'LzComposeTypesAccounts'
)
