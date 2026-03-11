'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart, Search, User, Menu, ChevronDown, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useFavorites } from '@/hooks/use-favorites'

interface DropdownItem {
  label: string
  href?: string
}

interface NavDropdown {
  label: string
  items: DropdownItem[]
}

const ageRanges: NavDropdown = {
  label: 'By Age',
  items: [
    { label: '0 Months +', href: '/shop?age=0' },
    { label: '3 Months +', href: '/shop?age=3' },
    { label: '6 Months +', href: '/shop?age=6' },
    { label: '9 Months +', href: '/shop?age=9' },
    { label: '12 Months +', href: '/shop?age=12' },
    { label: '15 Months +', href: '/shop?age=15' },
    { label: '18 Months +', href: '/shop?age=18' },
    { label: '21 Months +', href: '/shop?age=21' },
    { label: '24 Months +', href: '/shop?age=24' },
    { label: '30 Months +', href: '/shop?age=30' },
  ]
}

const categories: NavDropdown = {
  label: 'By Category',
  items: [
    { label: 'Toys', href: '/shop?category=toys' },
    { label: 'Wooden Puzzles', href: '/shop?category=puzzles' },
    { label: 'Developmental Aids', href: '/shop?category=developmental' },
    { label: 'Montessori Furniture', href: '/shop?category=furniture' },
    { label: 'Kids Utensils', href: '/shop?category=utensils' },
    { label: 'Montessori Kits', href: '/shop?category=kits' },
  ]
}

const bulkOptions: NavDropdown = {
  label: 'Buy In Bulk',
  items: [
    { label: 'Preschool', href: '/bulk?type=preschool' },
    { label: 'Retail', href: '/bulk?type=retail' },
    { label: 'International', href: '/bulk?type=international' },
  ]
}

function NavDropdownMenu({ label, items }: NavDropdown) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-300 py-2"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span>{label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 mt-0 w-max bg-card border border-border rounded-lg shadow-lg py-2 transform transition-all duration-300 origin-top ${
          isOpen
            ? 'opacity-100 visible scale-y-100'
            : 'opacity-0 invisible scale-y-95 pointer-events-none'
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href || '#'}
            className="block px-4 py-2.5 text-foreground hover:text-primary hover:bg-secondary transition-colors duration-200 whitespace-nowrap"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { favoriteCount } = useFavorites()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-bold text-primary animate-fade-in">
             Gobi Toys
            </div>
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/" className="text-foreground hover:text-primary transition-colors duration-300">
              Home
            </Link>
            <Link href="/shop" className="text-foreground hover:text-primary transition-colors duration-300">
              All Products
            </Link>
            <NavDropdownMenu {...ageRanges} />
            <NavDropdownMenu {...categories} />
            <NavDropdownMenu {...bulkOptions} />
            <Link href="/gift" className="text-foreground hover:text-primary transition-colors duration-300">
              Gift Kit & Card
            </Link>
            <Link href="/loyalty" className="text-foreground hover:text-primary transition-colors duration-300">
              Loyalty Rewards
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition-colors duration-300">
              Blog
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors duration-300">
              Contact Us
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-300 hover:scale-110 transform">
              <Search size={20} className="text-foreground" />
            </button>
            <Link href="/wishlist">
              <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-300 relative hover:scale-110 transform">
                <Heart size={20} className="text-foreground" />
                {mounted && favoriteCount > 0 && (
                  <span className="absolute top-1 right-1 bg-accent text-accent-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                    {favoriteCount}
                  </span>
                )}
              </button>
            </Link>
            <Link href="/cart">
              <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-300 relative hover:scale-110 transform">
                <ShoppingCart size={20} className="text-foreground" />
                <span className="absolute top-1 right-1 bg-accent text-accent-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                  0
                </span>
              </button>
            </Link>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-300 hover:scale-110 transform">
              <User size={20} className="text-foreground" />
            </button>
            <button
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={20} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card py-4 px-4 space-y-3 animate-slide-down">
            <Link href="/" className="block text-foreground hover:text-primary transition-colors duration-300">
              Home
            </Link>
            <Link href="/shop" className="block text-foreground hover:text-primary transition-colors duration-300">
              All Products
            </Link>
            <details className="cursor-pointer">
              <summary className="text-foreground hover:text-primary transition-colors duration-300">By Age</summary>
              <div className="pl-4 mt-2 space-y-2">
                {ageRanges.items.map((item, idx) => (
                  <Link key={idx} href={item.href || '#'} className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
            <details className="cursor-pointer">
              <summary className="text-foreground hover:text-primary transition-colors duration-300">By Category</summary>
              <div className="pl-4 mt-2 space-y-2">
                {categories.items.map((item, idx) => (
                  <Link key={idx} href={item.href || '#'} className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
            <details className="cursor-pointer">
              <summary className="text-foreground hover:text-primary transition-colors duration-300">Buy In Bulk</summary>
              <div className="pl-4 mt-2 space-y-2">
                {bulkOptions.items.map((item, idx) => (
                  <Link key={idx} href={item.href || '#'} className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
            <Link href="/gift" className="block text-foreground hover:text-primary transition-colors duration-300">
              Gift Kit & Card
            </Link>
            <Link href="/loyalty" className="block text-foreground hover:text-primary transition-colors duration-300">
              Loyalty Rewards
            </Link>
            <Link href="/blog" className="block text-foreground hover:text-primary transition-colors duration-300">
              Blog
            </Link>
            <Link href="/contact" className="block text-foreground hover:text-primary transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
