import {  parseUnits, formatUnits } from 'ethers'

const USD_DECIMALS = 6 // USDC/USDT have 6 decimals
const DEMI_DECIMALS = 18 // Assume for DEMI

export function usdToBigInt(amount: string): bigint {
  return parseUnits(amount, USD_DECIMALS)
}

export function bigIntToUsd(amount: bigint): string {
  return formatUnits(amount, USD_DECIMALS)
}

export function demiToBigInt(amount: string): bigint {
  return parseUnits(amount, DEMI_DECIMALS)
}

export function bigIntToDemi(amount: bigint): string {
  return formatUnits(amount, DEMI_DECIMALS)
}

export function calculateDemiReceive(sendUsd: string, pricePerDemiUsd: string): string {
  const sendBig = usdToBigInt(sendUsd)
  const priceBig = usdToBigInt(pricePerDemiUsd)
  if (priceBig === 0n) throw new Error('Price cannot be zero')
  const receiveBig = (sendBig * BigInt(10 ** DEMI_DECIMALS)) / priceBig // Cross-decimal mul/div
  return bigIntToDemi(receiveBig)
}