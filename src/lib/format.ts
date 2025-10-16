/**
 * Utility functions for formatting addresses, dates, and other display values
 */

/**
 * Shorten a wallet address for display
 * Example: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb7" → "0x742d...bEb7"
 */
export function shortenAddress(address: string, chars = 4): string {
  if (!address) return ''
  if (address.length < chars * 2 + 2) return address
  
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`
}

/**
 * Copy text to clipboard
 * Returns true if successful, false otherwise
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (e) {
    console.log(e);
    console.clear();
    // Fallback for older browsers
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    const success = document.execCommand('copy')
    document.body.removeChild(textarea)
    return success
  }
}

/**
 * Format a timestamp to a readable date
 * Example: 1699999999000 → "Nov 2, 2024 at 12:00 AM"
 */
export function formatDate(timestamp: number): string {
  const date = new Date(timestamp)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}

/**
 * Format seconds into human-readable time remaining
 * Example: 3665 → "1h 1m 5s"
 */
export function formatTimeRemaining(seconds: number): string {
  if (seconds <= 0) return '0s'
  
  const days = Math.floor(seconds / 86400)
  const hours = Math.floor((seconds % 86400) / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  
  const parts: string[] = []
  if (days > 0) parts.push(`${days}d`)
  if (hours > 0) parts.push(`${hours}h`)
  if (minutes > 0) parts.push(`${minutes}m`)
  if (secs > 0 || parts.length === 0) parts.push(`${secs}s`)
  
  return parts.join(' ')
}