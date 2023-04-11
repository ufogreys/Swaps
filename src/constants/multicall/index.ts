import { ChainId } from 'sdkv2'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x8db97c7cece249c2b98bdc0226cc4c2a57bf52fc', // TODO
  [ChainId.BSCTESTNET]: '0x88Da55CE7185Fd86a2C15FE93b05F84E25cFeEB1'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
