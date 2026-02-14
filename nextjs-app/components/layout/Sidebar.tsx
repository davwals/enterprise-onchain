'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
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
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar - matches homepage design */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <img
              src="https://i.imgur.com/LJ0gSjb.jpeg"
              alt="Enterprise Onchain"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-semibold text-lg text-zinc-900 dark:text-white">Enterprise Onchain</span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            <Link
              href="/terminal"
              onClick={onClose}
              className="block px-4 py-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Terminal
            </Link>
            <a
              href="https://enterpriseonchain.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="block px-4 py-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Newsletter ↗
            </a>
            <Link
              href="/blog"
              onClick={onClose}
              className="block px-4 py-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Articles
            </Link>
            <a
              href="https://www.youtube.com/@enterpriseonchain"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="block px-4 py-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Podcast ↗
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="mt-8 space-y-3">
            <Link
              href="/login"
              onClick={onClose}
              className="block w-full px-4 py-2 text-center rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Sign In
            </Link>
            <a
              href="https://enterpriseonchain.substack.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="block w-full px-4 py-2 text-center rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors font-medium"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
