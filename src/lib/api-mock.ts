let currentTier = {
  currentPrice: '0.01', // USD per DEMI
  nextPrice: '0.02',
  tierEndTime: Date.now() + 5 * 60 * 1000, // 5 min from now for testing
  tokensSold: '0',
  tokensAvailable: '1000000',
}

// Simulate tier change after countdown
setInterval(() => {
  const now = Date.now()
  if (now >= currentTier.tierEndTime) {
    currentTier = {
      ...currentTier,
      currentPrice: currentTier.nextPrice,
      nextPrice: '0.03',
      tierEndTime: now + 5 * 60 * 1000,
      tokensSold: (parseFloat(currentTier.tokensSold) + 10000).toString(),
    }
  }
}, 1000)

export async function getTokenPrice() {
  return Promise.resolve(currentTier)
}

export async function calculatePurchase({ sendAmount, currentPrice }: { sendAmount: string; sendToken: 'USDC' | 'USDT'; currentPrice: string }) {
  // Mock fee 0.5%
  const fee = (parseFloat(sendAmount) * 0.005).toFixed(2)
  const receiveAmount = (parseFloat(sendAmount) / parseFloat(currentPrice)).toFixed(2) // Simple for mock; real uses bn.ts
  return Promise.resolve({
    receiveAmount,
    fee,
    estimatedTime: 'About 1 minute',
  })
}

// Mock balance for connected wallet (use real wagmi later)
export async function getWalletBalance(address: string) {
  return Promise.resolve({
    address,
    balances: {
      usdc: '1234.56',
      usdt: '567.89',
      demi: '0',
    },
    network: 'polygon',
  })
}