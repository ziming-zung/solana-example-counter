/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type LzReceiveParams = {
  srcEid: number
  sender: number[] /* size: 32 */
  nonce: beet.bignum
  guid: number[] /* size: 32 */
  message: Uint8Array
  extraData: Uint8Array
}

/**
 * @category userTypes
 * @category generated
 */
export const lzReceiveParamsBeet =
  new beet.FixableBeetArgsStruct<LzReceiveParams>(
    [
      ['srcEid', beet.u32],
      ['sender', beet.uniformFixedSizeArray(beet.u8, 32)],
      ['nonce', beet.u64],
      ['guid', beet.uniformFixedSizeArray(beet.u8, 32)],
      ['message', beet.bytes],
      ['extraData', beet.bytes],
    ],
    'LzReceiveParams'
  )
