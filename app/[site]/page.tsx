import { notFound } from 'next/navigation'
import { getSiteBySlug, getAllSiteSlugs } from '@/lib/sites'
import { ParagraphList } from '../components/paragraphs/ParagraphRenderer'

interface PageProps {
  params: Promise<{ site: string }>
}

export async function generateStaticParams() {
  return getAllSiteSlugs().map((slug) => ({ site: slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { site: slug } = await params
  const site = getSiteBySlug(slug)
  if (!site) return { title: 'Not Found' }
  return {
    title: `${site.name} | Decoupled Examples`,
    description: site.description,
  }
}

export default async function SitePage({ params }: PageProps) {
  const { site: slug } = await params
  const site = getSiteBySlug(slug)
  if (!site) notFound()

  return <ParagraphList sections={site.sections} />
}
