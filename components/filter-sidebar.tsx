'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, X, SlidersHorizontal } from 'lucide-react'

interface FilterSidebarProps {
  selectedAge?: string
  selectedCategory?: string
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
  { label: 'Stacking Toys', value: 'toys', count: 12 },
  { label: 'Wooden Puzzles', value: 'puzzles', count: 8 },
  { label: 'Developmental Aids', value: 'developmental', count: 15 },
  { label: 'Montessori Furniture', value: 'furniture', count: 6 },
  { label: 'Kids Utensils', value: 'utensils', count: 5 },
  { label: 'Montessori Kits', value: 'kits', count: 10 },
]

const priceRanges = [
  { label: 'Under ₹500', value: '0-500' },
  { label: '₹500 - ₹1000', value: '500-1000' },
  { label: '₹1000 - ₹2000', value: '1000-2000' },
  { label: '₹2000 - ₹5000', value: '2000-5000' },
  { label: 'Above ₹5000', value: '5000' },
]

// Shared filter content — identical in both desktop & mobile
function FilterContent({
  selectedAge,
  selectedCategory,
  onClose,
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    age: true,
    category: true,
    price: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const buildFilterUrl = (age?: string, category?: string, price?: string) => {
    const params = new URLSearchParams()
    if (age) params.append('age', age)
    if (category) params.append('category', category)
    if (price) params.append('price', price)
    return `/shop${params.toString() ? `?${params.toString()}` : ''}`
  }

  return (
    <div className="space-y-6">
      {/* Age Filter */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection('age')}
          className="flex items-center justify-between w-full text-lg font-semibold text-foreground hover:text-primary transition"
        >
          <span>By Age</span>
          <ChevronDown
            size={18}
            className={`transition-transform duration-200 ${expandedSections.age ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.age && (
          <div className="space-y-1 pl-2">
            {ageRanges.map((range) => (
              <Link
                key={range.value}
                href={buildFilterUrl(
                  selectedAge === range.value ? undefined : range.value,
                  selectedCategory
                )}
                onClick={onClose}
              >
                <label className="flex items-center gap-3 cursor-pointer group py-1">
                  <input
                    type="checkbox"
                    checked={selectedAge === range.value}
                    readOnly
                    className="w-4 h-4 rounded border-border cursor-pointer accent-primary"
                  />
                  <span
                    className={`text-sm transition ${
                      selectedAge === range.value
                        ? 'text-primary font-medium'
                        : 'text-foreground group-hover:text-primary'
                    }`}
                  >
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
            className={`transition-transform duration-200 ${expandedSections.category ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.category && (
          <div className="space-y-1 pl-2">
            {categories.map((cat) => (
              <Link
                key={cat.value}
                href={buildFilterUrl(
                  selectedAge,
                  selectedCategory === cat.value ? undefined : cat.value
                )}
                onClick={onClose}
              >
                <label className="flex items-center gap-3 cursor-pointer group py-1">
                  <input
                    type="checkbox"
                    checked={selectedCategory === cat.value}
                    readOnly
                    className="w-4 h-4 rounded border-border cursor-pointer accent-primary"
                  />
                  <span
                    className={`text-sm flex-1 transition ${
                      selectedCategory === cat.value
                        ? 'text-primary font-medium'
                        : 'text-foreground group-hover:text-primary'
                    }`}
                  >
                    {cat.label}
                  </span>
                  <span
                    className={`text-xs rounded-full px-2 py-0.5 transition ${
                      selectedCategory === cat.value
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {cat.count}
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
            className={`transition-transform duration-200 ${expandedSections.price ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.price && (
          <div className="space-y-1 pl-2">
            {priceRanges.map((range) => (
              <Link
                key={range.value}
                href={buildFilterUrl(selectedAge, selectedCategory, range.value)}
                onClick={onClose}
              >
                <label className="flex items-center gap-3 cursor-pointer group py-1">
                  <input
                    type="checkbox"
                    readOnly
                    className="w-4 h-4 rounded border-border cursor-pointer accent-primary"
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
        <Link href="/shop" className="block" onClick={onClose}>
          <button className="w-full py-2 px-4 bg-secondary text-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition font-medium">
            Clear Filters
          </button>
        </Link>
      )}
    </div>
  )
}

export function FilterSidebar({
  selectedAge,
  selectedCategory,
  onClose,
}: FilterSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const activeFilterCount = [selectedAge, selectedCategory].filter(Boolean).length

  return (
    <>
      {/* ── DESKTOP: original sidebar — completely unchanged ── */}
      <div className="hidden md:block w-64 bg-card border border-border rounded-lg p-6 space-y-6">
        <FilterContent
          selectedAge={selectedAge}
          selectedCategory={selectedCategory}
        />
      </div>

      {/* ── MOBILE: bottom sheet ── */}
      <div className="md:hidden">

        {/* Fixed "Filters" pill button at bottom of screen */}
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-xl font-semibold text-sm active:scale-95 transition-transform"
        >
          <SlidersHorizontal size={16} />
          Filters
          {activeFilterCount > 0 && (
            <span className="bg-primary-foreground text-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center leading-none">
              {activeFilterCount}
            </span>
          )}
        </button>

        {/* Backdrop overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Bottom sheet panel */}
        <div
          className={`fixed bottom-0 left-0 right-0 z-50 bg-card rounded-t-2xl shadow-2xl transition-transform duration-300 ease-in-out ${
            mobileOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          style={{ maxHeight: '85vh' }}
        >
          {/* Drag handle */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 rounded-full bg-border" />
          </div>

          {/* Sheet header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border">
            <h2 className="text-base font-bold text-foreground">Filters</h2>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 rounded-full hover:bg-muted transition text-muted-foreground"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable filter content */}
          <div
            className="overflow-y-auto px-5 py-5"
            style={{ maxHeight: 'calc(85vh - 80px)' }}
          >
            <FilterContent
              selectedAge={selectedAge}
              selectedCategory={selectedCategory}
              onClose={() => setMobileOpen(false)}
            />
          </div>
        </div>
      </div>
    </>
  )
}