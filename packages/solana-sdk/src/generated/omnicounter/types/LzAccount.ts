/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import * as beet from '@metaplex-foundation/beet'
export type LzAccount = {
  pubkey: web3.PublicKey
  isSigner: boolean
  isWritable: boolean
}

/**
 * @category userTypes
 * @category generated
 */
export const lzAccountBeet = new beet.BeetArgsStruct<LzAccount>(
  [
    ['pubkey', beetSolana.publicKey],
    ['isSigner', beet.bool],
    ['isWritable', beet.bool],
  ],
  'LzAccount'
)
