import { ETHERSCAN_API_KEY, ETHERSCAN_API_URL } from '@config'

export const getContractAbi = async (address: string) => {
  const x = await fetch(`${ETHERSCAN_API_URL}?module=contract&action=getabi&address=${address}&apikey=${ETHERSCAN_API_KEY}`)
  const { status, result } = await x.json()
  if (status !== '1') throw new Error('Contract ABI not found')

  return result
}
