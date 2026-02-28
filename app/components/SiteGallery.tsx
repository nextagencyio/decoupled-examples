'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, X } from 'lucide-react'
import type { SiteConfig } from '@/lib/site-types'

export default function SiteGallery({ sites }: { sites: SiteConfig[] }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return sites
    const q = query.toLowerCase()
    return sites.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.slug.toLowerCase().includes(q)
    )
  }, [sites, query])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Search bar */}
      <div className="mb-8 max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sites..."
            className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        {query && (
          <p className="text-xs text-gray-500 mt-2 text-center">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
          </p>
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No sites match your search.</p>
          <button
            onClick={() => setQuery('')}
            className="mt-3 text-blue-400 hover:text-blue-300 text-sm transition-colors"
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((site) => (
            <Link
              key={site.slug}
              href={`/${site.slug}`}
              className="group rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden bg-gray-800">
                <img
                  src={site.thumbnail}
                  alt={site.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="h-1" style={{ backgroundColor: site.accentColor }} />
              <div className="p-5">
                <h2 className="text-lg font-semibold text-white mb-1.5 group-hover:text-blue-400 transition-colors">
                  {site.name}
                </h2>
                <p className="text-gray-400 text-sm line-clamp-2">{site.description}</p>
                <p className="text-xs text-gray-600 mt-3">
                  Added {new Date(site.dateAdded).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
