'use client'

import Link from 'next/link'
import type { SiteConfig } from '@/lib/site-types'

export default function SiteGallery({ sites }: { sites: SiteConfig[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sites.map((site) => (
          <Link
            key={site.slug}
            href={`/${site.slug}`}
            className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all"
          >
            <div className="aspect-video overflow-hidden bg-gray-100">
              <img
                src={site.thumbnail}
                alt={site.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-1" style={{ backgroundColor: site.accentColor }} />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {site.name}
              </h2>
              <p className="text-gray-600 text-sm">{site.description}</p>
              <p className="text-xs text-gray-400 mt-3">
                Added {new Date(site.dateAdded).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
