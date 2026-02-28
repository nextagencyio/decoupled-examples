'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface SiteHeaderProps {
  siteName?: string
  siteSlug?: string
}

export default function SiteHeader({ siteName }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800/50 bg-gradient-to-r from-gray-900/95 via-gray-900/95 to-blue-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14 gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Gallery
          </Link>
          {siteName && (
            <>
              <span className="text-gray-600">/</span>
              <span className="text-sm font-medium text-white">{siteName}</span>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
