import { getAllSites } from '@/lib/sites'
import SiteGallery from './components/SiteGallery'

export const metadata = {
  title: 'Decoupled Examples — Component Showcase Gallery',
  description: 'Browse AI-generated example SPA websites built with reusable paragraph components.',
}

export default function HomePage() {
  const sites = getAllSites()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Decoupled Examples</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-2">
            A growing collection of example SPA websites built with reusable paragraph components.
          </p>
          <p className="text-sm text-gray-300">
            {sites.length} site{sites.length !== 1 ? 's' : ''} and counting — new ones added daily by AI
          </p>
        </div>
      </div>
      <SiteGallery sites={sites} />
    </div>
  )
}
