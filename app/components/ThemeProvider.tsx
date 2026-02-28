'use client'

import { useMemo } from 'react'
import type { SiteTheme } from '@/lib/site-types'
import { generatePalette } from '@/lib/color-utils'

const FONT_STACKS: Record<SiteTheme['fontFamily'], string> = {
  'inter': 'var(--font-inter), system-ui, sans-serif',
  'dm-sans': 'var(--font-dm-sans), system-ui, sans-serif',
  'playfair': 'var(--font-playfair), Georgia, serif',
  'space-grotesk': 'var(--font-space-grotesk), system-ui, sans-serif',
  'merriweather': 'var(--font-merriweather), Georgia, serif',
  'raleway': 'var(--font-raleway), system-ui, sans-serif',
  'source-serif': 'var(--font-source-serif), Georgia, serif',
  'work-sans': 'var(--font-work-sans), system-ui, sans-serif',
}

interface ThemeProviderProps {
  theme: SiteTheme
  children: React.ReactNode
}

export default function ThemeProvider({ theme, children }: ThemeProviderProps) {
  const style = useMemo(() => {
    const primary = generatePalette(theme.primaryColor)
    const secondary = generatePalette(theme.secondaryColor)

    const vars: Record<string, string> = {}

    for (const [shade, rgb] of Object.entries(primary)) {
      vars[`--primary-${shade}`] = rgb
    }
    for (const [shade, rgb] of Object.entries(secondary)) {
      vars[`--secondary-${shade}`] = rgb
    }

    vars['fontFamily'] = FONT_STACKS[theme.fontFamily]

    return vars
  }, [theme])

  return (
    <div style={style as React.CSSProperties}>
      {children}
    </div>
  )
}
