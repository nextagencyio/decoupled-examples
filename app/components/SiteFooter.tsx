interface SiteFooterProps {
  siteName?: string
}

export default function SiteFooter({ siteName }: SiteFooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
        <p>{siteName || 'Decoupled Examples'} — Built with reusable paragraph components</p>
      </div>
    </footer>
  )
}
