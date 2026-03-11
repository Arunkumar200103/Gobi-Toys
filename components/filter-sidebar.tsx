'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, X } from 'lucide-react'

interface FilterSidebarProps {
  selectedAge?: string
  selectedCategory?: string
  minPrice?: number
  maxPrice?: number
  onClose?: () => void
}

const ageRanges = [
  { label: '0-3 Months', value: '0' },
  { label: '3-6 Months', value: '3' },
  { label: '6-9 Months', value: '6' },
  { label: '9-12 Months', value: '9' },
  { label: '12-15 Months', value: '12' },
  { label: '15-18 Months', value: '15' },
  { label: '18-21 Months', value: '18' },
  { label: '21-24 Months', value: '21' },
  { label: '24-30 Months', value: '24' },
  { label: '30+ Months', value: '30' },
]

const categories = [
  { label: 'Toys', value: 'toys' },
  { label: 'Wooden Puzzles', value: 'puzzles' },
  { label: 'Developmental Aids', value: 'developmental' },
  { label: 'Montessori Furniture', value: 'furniture' },
  { label: 'Kids Utensils', value: 'utensils' },
  { label: 'Montessori Kits', value: 'kits' },
]

const priceRanges = [
  { label: 'Under ₹500', value: '0-500' },
  { label: '₹500 - ₹1000', value: '500-1000' },
  { label: '₹1000 - ₹2000', value: '1000-2000' },
  { label: '₹2000 - ₹5000', value: '2000-5000' },
  { label: 'Above ₹5000', value: '5000' },
]

export function FilterSidebar({
  selectedAge,
  selectedCategory,
  minPrice,
  maxPrice,
  onClose,
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    age: true,
    category: true,
    price: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const buildFilterUrl = (age?: string, category?: string, price?: string) => {
    const params = new URLSearchParams()
    if (age) params.append('age', age)
    if (category) params.append('category', category)
    if (price) params.append('price', price)
    return `/shop${params.toString() ? `?${params.toString()}` : ''}`
  }

  return (
    <div className="w-full md:w-64 bg-card border border-border rounded-lg p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between md:hidden">
        <h2 className="text-lg font-bold text-foreground">Filters</h2>
        <button onClick={onClose} className="p-1 hover:bg-muted rounded">
          <X size={20} />
        </button>
      </div>

      {/* Age Filter */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection('age')}
          className="flex items-center justify-between w-full text-lg font-semibold text-foreground hover:text-primary transition"
        >
          <span>By Age</span>
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedSections.age ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.age && (
          <div className="space-y-2 pl-2">
            {ageRanges.map((range) => (
              <Link key={range.value} href={buildFilterUrl(range.value, selectedCategory)}>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedAge === range.value}
                    readOnly
                    className="w-4 h-4 rounded border-border cursor-pointer"
                  />
                  <span className="text-sm text-foreground group-hover:text-primary transition">
                    {range.label}
                  </span>
                </label>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Category Filter */}
      <div className="space-y-3 border-t border-border pt-6">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full text-lg font-semibold text-foreground hover:text-primary transition"
        >
          <span>Category</span>
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedSections.category ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.category && (
          <div className="space-y-2 pl-2">
            {categories.map((cat) => (
              <Link key={cat.value} href={buildFilterUrl(selectedAge, cat.value)}>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedCategory === cat.value}
                    readOnly
                    className="w-4 h-4 rounded border-border cursor-pointer"
                  />
                  <span className="text-sm text-foreground group-hover:text-primary transition">
                    {cat.label}
                  </span>
                </label>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="space-y-3 border-t border-border pt-6">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-lg font-semibold text-foreground hover:text-primary transition"
        >
          <span>Price</span>
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedSections.price ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.price && (
          <div className="space-y-2 pl-2">
            {priceRanges.map((range) => (
              <Link key={range.value} href={buildFilterUrl(selectedAge, selectedCategory, range.value)}>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    readOnly
                    className="w-4 h-4 rounded border-border cursor-pointer"
                  />
                  <span className="text-sm text-foreground group-hover:text-primary transition">
                    {range.label}
                  </span>
                </label>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Clear Filters */}
      {(selectedAge || selectedCategory) && (
        <Link href="/shop" className="block">
          <button className="w-full py-2 px-4 bg-secondary text-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition font-medium">
            Clear Filters
          </button>
        </Link>
      )}
    </div>
  )
}
