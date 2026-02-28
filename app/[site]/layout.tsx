import { getSiteBySlug } from '@/lib/sites'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import ThemeProvider from '../components/ThemeProvider'
import type { SiteTheme } from '@/lib/site-types'

const defaultTheme: SiteTheme = {
  primaryColor: '#7c3aed',
  secondaryColor: '#14b8a6',
  fontFamily: 'inter',
  borderRadius: 'lg',
}

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ site: string }>
}) {
  const { site: slug } = await params
  const site = getSiteBySlug(slug)

  return (
    <ThemeProvider theme={site?.theme ?? defaultTheme}>
      <SiteHeader siteName={site?.name} siteSlug={slug} />
      <main className="flex-1">{children}</main>
      <SiteFooter siteName={site?.name} />
    </ThemeProvider>
  )
}
