import { getAllSites } from '@/lib/sites'
import SiteGallery from './components/SiteGallery'
import Link from 'next/link'

export const metadata = {
  title: 'Decoupled Examples — Component Showcase Gallery',
  description: 'Browse AI-generated example SPA websites built with reusable paragraph components.',
}

export default function HomePage() {
  const sites = getAllSites()

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-800/50 bg-gradient-to-r from-gray-900/95 via-gray-900/95 to-blue-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
                      stroke="url(#logoGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-bold text-white">
                decoupled<span className="text-blue-400">.io</span>
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="https://decoupled.io" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm">
                decoupled.io
              </a>
              <a href="https://github.com/nextagencyio/decoupled-examples" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm">
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Decoupled{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Examples
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-3">
            A growing collection of AI-generated example websites showcasing the flexibility of the{' '}
            <a
              href="https://github.com/nextagencyio/decoupled-components"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
            >
              decoupled-components
            </a>{' '}
            starter kit — each built from the same set of reusable paragraph components.
          </p>
          <p className="text-sm text-gray-500">
            {sites.length} sites and counting — new ones added daily by AI
          </p>
        </div>
      </div>

      {/* Gallery */}
      <SiteGallery sites={sites} />

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-2">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
                      stroke="url(#footerGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>
              </svg>
              <span className="text-lg font-bold">
                decoupled<span className="text-blue-500">.io</span>
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="https://decoupled.io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                decoupled.io
              </a>
              <a href="https://github.com/nextagencyio/decoupled-examples" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Built with decoupled-components
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
