import type { MetaMaskInpageProvider } from 'npm:@metamask/providers'

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}
