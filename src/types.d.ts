import type { MetaMaskInpageProvider } from 'npm:@metamask/providers'

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }

  type NonNullableProps<T, K extends keyof T> = {
    [P in keyof T]: P extends K ? NonNullable<T[P]> : T[P];
  };
}
