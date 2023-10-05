import { useContext, useEffect, useState, createContext } from 'react'
import { ethers } from 'ethers'
import { CHAIN_ID, POLYGON_MUMBAI_RPC_URL } from '@/config'

interface MetamaskContextProps {
  isMetamaskInstalled: boolean;
  isMetamaskLoading: boolean;
  isMetamaskConnected: boolean;
  accounts: ethers.JsonRpcSigner[];
  provider?: ethers.BrowserProvider;
  connectToMetamask: () => Promise<void>;
  getContract: (address: string, abi: ethers.InterfaceAbi) => Promise<ethers.Contract>;
}

const MetamaskContext = createContext<MetamaskContextProps>({} as MetamaskContextProps)

export function useMetamask() {
  return useContext(MetamaskContext)
}

const CHAIN_NAMES = Object.freeze<Record<string, string>>({
  '137': 'Polygon Mainnet',
  '80001': 'Polygon Mumbai'
})

const CHAIN_RPCS = Object.freeze<Record<string, string[]>>({
  '137': ['https://polygon-rpc.com/'],
  '80001': ['https://rpc-mumbai.maticvigil.com/']
})

const chainId = ethers.toQuantity(CHAIN_ID)

export function MetamaskProvider({ children }: { children: React.ReactNode }) {
  const [isMetamaskLoading, setIsMetamaskLoading] = useState(false)
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false)
  const [isMetamaskConnected, setIsMetamaskConnected] = useState(false)
  const [accounts, setAccounts] = useState<MetamaskContextProps['accounts']>([])
  const [provider, setProvider] = useState<MetamaskContextProps['provider']>()

  useEffect(() => {
    !async function () {
      if (window.ethereum) {
        setIsMetamaskLoading(true)
        setIsMetamaskInstalled(true)
        const provider = new ethers.BrowserProvider(window.ethereum, 'any')
        const accounts = await provider.listAccounts()
        setProvider(provider)
        setAccounts(accounts)
        setIsMetamaskConnected(accounts.length > 0)
        setIsMetamaskLoading(false)

        provider.on('network', (_newNetwork, oldNetwork) => {
          if (oldNetwork) {
            window.location.reload()
          }
        })
      }
    }()
  }, [])

  async function switchNetwork() {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId }]
      })
    } catch (error: any) {
      if (error.code === 4902) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId,
              chainName: CHAIN_NAMES[CHAIN_ID],
              rpcUrls: CHAIN_RPCS[CHAIN_ID],
              nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' }
            }
          ]
        })
      } else {
        if (error.code === 4001) {
          console.error('User rejected to switch network.')
        }

        throw error
      }
    }
  }

  async function connectToMetamask() {
    if (window.ethereum) {
      try {
        if (window.ethereum.networkVersion !== CHAIN_ID) await switchNetwork()

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts', params: [{ chainId }] })
        setAccounts(accounts as MetamaskContextProps['accounts'])
        setIsMetamaskConnected(true)
      } catch (error) {
        console.error(error)
      }
    } else {
      console.error('Metamask not detected')
    }
  }

  async function getContract(address: string, abi: ethers.InterfaceAbi) {
    if (!isMetamaskConnected || !provider) {
      const rpcProvider = new ethers.JsonRpcProvider(POLYGON_MUMBAI_RPC_URL)
      return new ethers.Contract(address, abi, rpcProvider)
    }

    return new ethers.Contract(address, abi, await provider.getSigner())
  }

  const value = {
    isMetamaskInstalled,
    isMetamaskLoading,
    isMetamaskConnected,
    accounts,
    provider,
    connectToMetamask,
    getContract
  }

  return (
    <MetamaskContext.Provider value={value}>
      {children}
    </MetamaskContext.Provider>
  )
}
