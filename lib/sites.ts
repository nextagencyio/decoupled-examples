import { sites } from '@/data/sites/_registry'
import type { SiteConfig } from './site-types'

export function getAllSites(): SiteConfig[] {
  return [...sites].sort(
    (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
  )
}

export function getSiteBySlug(slug: string): SiteConfig | undefined {
  return sites.find((s) => s.slug === slug)
}

export function getAllSiteSlugs(): string[] {
  return sites.map((s) => s.slug)
}
