# DEMI Token Presale - React Setup Instructions

## What You Need

This branch contains only the essentials:
- Contract ABI (`src/lib/demi-abi.json`)
- DEMI logos (`public/assets/`)
- Environment variables template (`.env.example`)

## Build It Your Way

Set up React however you prefer:
- Create React App (CRA)
- Vite
- Your own custom setup

## Required Dependencies
```bash
npm install wagmi viem@2.x @tanstack/react-query @rainbow-me/rainbowkit
npm install react-router-dom  # If you want routing
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in after mainnet deployment:
```
REACT_APP_DEMI_CONTRACT_ADDRESS=
REACT_APP_USDT_ADDRESS=0xc2132D05D31c914a87C6611C10748AEb04B58e8F
REACT_APP_USDC_ADDRESS=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174
REACT_APP_CHAIN_ID=137
REACT_APP_POLYGON_RPC_URL=https://polygon-rpc.com
```

## Contract Integration

The ABI is in `src/lib/demi-abi.json`. 

Key functions:
- `buyWithUSDT(uint256 amount)` - Buy DEMI with USDT
- `buyWithUSDC(uint256 amount)` - Buy DEMI with USDC  
- `balanceOf(address)` - Check DEMI balance
- `tokenPrice()` - Current price (6 decimals, e.g., 10000 = $0.01)
- `calculateTokenAmount(uint256 usdAmount)` - Calculate DEMI for USD

## What to Build

1. Wallet connection (RainbowKit recommended)
2. Buy form with USDT/USDC input
3. Approve + Buy transaction flow
4. Display user's DEMI balance

## Assets

DEMI logos are in `public/assets/`:
- `demi_logo_transparent_background.svg`
- `demi_logo_white_background.svg`

## Network

- **Polygon Mainnet** (Chain ID: 137)
- Contract address: TBD (will provide after deployment)

Build it however you like! 🚀
