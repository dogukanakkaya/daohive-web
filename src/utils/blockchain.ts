import { CHAIN_ID } from '@/config'

const SCANNER_URLS = Object.freeze<Record<string, string>>({
  '137': 'https://polygonscan.com/',
  '80001': 'https://mumbai.polygonscan.com/'
})

export const txUrl = (txHash: string) => `${SCANNER_URLS[CHAIN_ID]}tx/${txHash}`