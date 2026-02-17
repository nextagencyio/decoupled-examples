'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface SiteHeaderProps {
  siteName?: string
  siteSlug?: string
}

export default function SiteHeader({ siteName }: SiteHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14 gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Gallery
          </Link>
          {siteName && (
            <>
              <span className="text-gray-300">/</span>
              <span className="text-sm font-medium text-gray-900">{siteName}</span>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
