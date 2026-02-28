interface SiteFooterProps {
  siteName?: string
}

export default function SiteFooter({ siteName }: SiteFooterProps) {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
        <p>{siteName || 'Decoupled Examples'} — Built with{' '}
          <a href="https://decoupled.io" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
            decoupled.io
          </a>
          {' '}components
        </p>
      </div>
    </footer>
  )
}
