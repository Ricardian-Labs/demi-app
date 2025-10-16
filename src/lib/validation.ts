import { z } from 'zod'

/**
 * Zod schemas for validating user input
 * Zod catches bad data before it causes problems
 */

// Validates amounts like "100.50" or "1000"
export const amountSchema = z.string()
  .min(1, 'Amount is required')
  .regex(/^\d+\.?\d*$/, 'Must be a valid number')
  .refine(
    (val) => {
      const num = parseFloat(val)
      return !isNaN(num) && num > 0
    },
    { message: 'Amount must be greater than 0' }
  )

// Validates Ethereum addresses (must start with 0x and be 42 chars)
export const addressSchema = z.string()
  .min(42, 'Invalid address')
  .max(42, 'Invalid address')
  .regex(/^0x[a-fA-F0-9]{40}$/, 'Invalid Ethereum address format')

// Validates the token selection (USDC or USDT only)
export const tokenSchema = z.enum(['USDC', 'USDT'], {
  message: 'Must select USDC or USDT'
})

// Complete form validation for the exchange interface
export const exchangeFormSchema = z.object({
  sendAmount: amountSchema,
  sendToken: tokenSchema,
  receiveAmount: z.string(), // Read-only, so just ensure it's a string
})

export type ExchangeFormData = z.infer<typeof exchangeFormSchema>