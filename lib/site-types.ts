import type { ParagraphType } from './types'

export interface SiteTheme {
  primaryColor: string
  secondaryColor: string
  fontFamily: 'inter' | 'dm-sans' | 'playfair' | 'space-grotesk' | 'merriweather' | 'raleway' | 'source-serif' | 'work-sans'
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export interface SiteConfig {
  slug: string
  name: string
  description: string
  thumbnail: string
  accentColor: string
  dateAdded: string
  category: string
  theme: SiteTheme
  sections: ParagraphType[]
}
