import { getSiteBySlug } from '@/lib/sites'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

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
    <>
      <SiteHeader siteName={site?.name} siteSlug={slug} />
      <main className="flex-1">{children}</main>
      <SiteFooter siteName={site?.name} />
    </>
  )
}
