'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, X } from 'lucide-react'
import type { SiteConfig } from '@/lib/site-types'
import Pagination from './Pagination'

const ITEMS_PER_PAGE = 18

export default function SiteGallery({ sites }: { sites: SiteConfig[] }) {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const categories = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const s of sites) {
      counts[s.category] = (counts[s.category] || 0) + 1
    }
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ name, count }))
  }, [sites])

  const filtered = useMemo(() => {
    let result = sites
    if (selectedCategory) {
      result = result.filter((s) => s.category === selectedCategory)
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.slug.toLowerCase().includes(q)
      )
    }
    return result
  }, [sites, query, selectedCategory])

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleQueryChange = (value: string) => {
    setQuery(value)
    setCurrentPage(1)
  }

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Category filters */}
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => handleCategoryChange(null)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === null
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
          }`}
        >
          All ({sites.length})
        </button>
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() =>
              handleCategoryChange(selectedCategory === cat.name ? null : cat.name)
            }
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === cat.name
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
            }`}
          >
            {cat.name} ({cat.count})
          </button>
        ))}
      </div>

      {/* Search bar */}
      <div className="mb-8 max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Search sites..."
            className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
          />
          {query && (
            <button
              onClick={() => handleQueryChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        {(query || selectedCategory) && (
          <p className="text-xs text-gray-500 mt-2 text-center">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
            {query && <> for &ldquo;{query}&rdquo;</>}
            {selectedCategory && <> in {selectedCategory}</>}
          </p>
        )}
      </div>

      {/* Grid */}
      {paginated.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No sites match your filters.</p>
          <button
            onClick={() => {
              handleQueryChange('')
              handleCategoryChange(null)
            }}
            className="mt-3 text-blue-400 hover:text-blue-300 text-sm transition-colors"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginated.map((site) => (
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
                <div className="flex items-center justify-between mb-1.5">
                  <h2 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {site.name}
                  </h2>
                  <span className="text-[11px] font-medium text-gray-500 bg-gray-800/80 px-2 py-0.5 rounded-full shrink-0 ml-2">
                    {site.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2">{site.description}</p>
                <p className="text-xs text-gray-600 mt-3">
                  Added {new Date(site.dateAdded).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}
