export function getSlugFromHash(): string | null {
  if (typeof window === 'undefined') return null
  const hash = window.location.hash.replace(/^#/, '')
  const match = hash.match(/^\/projects\/([a-z0-9-]+)\/?$/)
  return match ? match[1] : null
}
