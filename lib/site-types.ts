import type { ParagraphType } from './types'

export interface SiteConfig {
  slug: string
  name: string
  description: string
  thumbnail: string
  accentColor: string
  dateAdded: string
  sections: ParagraphType[]
}
