'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Newsletter' },
  { href: '/blog?category=insight', label: 'Insights' },
  { href: '/podcast', label: 'Podcast' },
  { href: 'https://institutions.ethereum.org', label: 'Institutional Tracker', external: true },
  { href: '/about', label: 'About' },
]

const socialLinks = [
  { href: 'https://x.com/enterpriseonchain', label: '𝕏' },
  { href: 'https://linkedin.com/company/enterprise-onchain', label: 'LinkedIn' },
  { href: 'https://open.spotify.com/show/enterpriseonchain', label: 'Spotify' },
]

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar panel */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-[300px] max-w-full bg-white z-50
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:w-[300px] max-sm:w-full`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col h-full p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="self-end p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Logo/Brand */}
          <div className="mt-4 mb-8">
            <h2 className="text-xl font-bold text-gray-900">ENTERPRISE ONCHAIN</h2>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-gray-900"
                      onClick={onClose}
                    >
                      {link.label} ↗
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-gray-900"
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Auth buttons */}
          <div className="py-6 border-t border-gray-200 space-y-3">
            <Link
              href="/login"
              className="block w-full py-3 px-4 text-center rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-gray-700"
              onClick={onClose}
            >
              Sign In
            </Link>
            <Link
              href="/subscribe"
              className="block w-full py-3 px-4 text-center rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors font-medium"
              onClick={onClose}
            >
              Subscribe
            </Link>
          </div>

          {/* Social links */}
          <div className="py-6 border-t border-gray-200">
            <div className="flex justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Footer link */}
          <div className="text-center text-sm text-gray-500">
            <a
              href="https://institutions.ethereum.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              institutions.ethereum.org
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
