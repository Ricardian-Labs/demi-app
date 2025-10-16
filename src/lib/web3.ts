import { createConfig, http, createStorage } from 'wagmi'
import { polygon } from 'viem/chains'
import { coinbaseWallet, injected, walletConnect } from '@wagmi/connectors'

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID as string

if (!projectId) {
  throw new Error('VITE_WALLET_CONNECT_PROJECT_ID is required')
}

export const config = createConfig({
  chains: [polygon],
  connectors: [
    injected({ target: 'metaMask' }), // MetaMask
    coinbaseWallet({ appName: 'Demi Token Launch' }),
    walletConnect({ projectId }),
  ],
  transports: {
    [polygon.id]: http(import.meta.env.VITE_POLYGON_RPC),
  },
  storage: createStorage({
    storage: window.localStorage,
  }),
})