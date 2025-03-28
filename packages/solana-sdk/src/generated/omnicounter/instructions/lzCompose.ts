/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import { LzComposeParams, lzComposeParamsBeet } from '../types/LzComposeParams'

/**
 * @category Instructions
 * @category LzCompose
 * @category generated
 */
export type LzComposeInstructionArgs = {
  params: LzComposeParams
}
/**
 * @category Instructions
 * @category LzCompose
 * @category generated
 */
export const lzComposeStruct = new beet.FixableBeetArgsStruct<
  LzComposeInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['params', lzComposeParamsBeet],
  ],
  'LzComposeInstructionArgs'
)
/**
 * Accounts required by the _lzCompose_ instruction
 *
 * @property [_writable_] count
 * @category Instructions
 * @category LzCompose
 * @category generated
 */
export type LzComposeInstructionAccounts = {
  count: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const lzComposeInstructionDiscriminator = [
  143, 252, 164, 222, 203, 105, 240, 7,
]

/**
 * Creates a _LzCompose_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category LzCompose
 * @category generated
 */
export function createLzComposeInstruction(
  accounts: LzComposeInstructionAccounts,
  args: LzComposeInstructionArgs,
  programId = new web3.PublicKey('2tLJfE12h5RY7vJqK6i41taeg8ejzigoFXduBanDV4Cu')
) {
  const [data] = lzComposeStruct.serialize({
    instructionDiscriminator: lzComposeInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.count,
      isWritable: true,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
