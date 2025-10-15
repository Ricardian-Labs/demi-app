# DEMI 

Frontend application for the DEMI token presale.

## 🔀 Two Versions Available

### **This Branch: Pure React with React Router**
Traditional React setup with manual routing via React Router.

### **Main Branch: Next.js** 
File-based routing with Next.js (more modern, better SEO).

**Choose whichever you prefer!**

---

## Tech Stack (This Branch)
- React 19 with TypeScript
- React Router for routing
- Tailwind CSS
- Wagmi/Viem (Web3)
- RainbowKit (Wallet connection)

## Getting Started
```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## What's Already Set Up

✅ React Router configured  
✅ Web3 libraries installed (wagmi, viem, rainbowkit)  
✅ Contract ABI at `src/lib/demi-abi.json`  
✅ DEMI logos in `public/assets/`  
✅ Tailwind CSS ready  
✅ TypeScript configured  

## What You Need to Build

1. **Landing Page** - Hero section with DEMI branding
2. **Wallet Connection** - Use RainbowKit
3. **Buy Form** - Input USDT/USDC, show DEMI amount, approve & buy buttons
4. **User Dashboard** - Show DEMI balance

## Environment Variables

Create `.env.local`:
```
REACT_APP_DEMI_CONTRACT_ADDRESS=
REACT_APP_POLYGON_RPC_URL=https://polygon-rpc.com
```

(Contract address will be provided after mainnet deployment)

## Project Structure
```
demi-app/
├── src/
│   ├── App.tsx         # Main app with React Router
│   ├── index.tsx       # Entry point
│   ├── pages/          # Page components
│   │   └── Home.tsx
│   ├── components/     # Reusable components (add yours here)
│   └── lib/
│       └── demi-abi.json  # Smart contract ABI
├── public/
│   └── assets/         # DEMI logos
```

## Ready to Build!

Everything is set up. Start coding! 🚀
