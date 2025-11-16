'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-neutral-mid/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">K</span>
            </div>
            <span className="text-xl font-heading font-bold text-primary-dark">Kintaraa</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-dark font-body hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <button className="px-6 py-2 bg-gradient-purple text-white rounded-full font-heading font-semibold hover:opacity-90 transition-opacity duration-200 shadow-sm">
              Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-neutral-dark hover:bg-neutral-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-neutral-dark font-body hover:bg-neutral-light rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full px-4 py-2 bg-gradient-purple text-white rounded-full font-heading font-semibold hover:opacity-90 transition-opacity duration-200">
              Download App
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
