# DEMI - Decentralized Market Intelligence Protocol

Frontend application for the DEMI token presale.

## Tech Stack
- Next.js 15
- TypeScript
- Tailwind CSS
- Wagmi/Viem (Web3 integration)
- RainbowKit (Wallet connection)

## Getting Started
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Smart Contract Integration

Contract details will be provided after mainnet deployment.

### Required Info:
- Contract Address: TBD
- Network: Polygon Mainnet (Chain ID: 137)
- Supported Tokens: USDT, USDC

## Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_DEMI_CONTRACT_ADDRESS=
NEXT_PUBLIC_POLYGON_RPC_URL=https://polygon-rpc.com
```

## Project Structure
```
demi-app/
├── src/
│   ├── app/          # Next.js app router pages
│   ├── components/   # React components
│   ├── lib/          # Utilities and contract ABIs
│   └── styles/       # Global styles
├── public/
│   └── assets/       # Logo, images, icons
└── README.md
```

## Features to Build

1. **Landing Page** - Hero section with DEMI branding
2. **Wallet Connection** - Connect MetaMask/WalletConnect
3. **Buy Form** - Input USDT/USDC amount, get DEMI
4. **User Dashboard** - Show DEMI balance and purchase history
5. **Price Display** - Current DEMI price ($0.01 initially)
