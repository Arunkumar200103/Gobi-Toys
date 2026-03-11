'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { FilterSidebar } from '@/components/filter-sidebar'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'

const allProducts = [
  {
    id: '1',
    name: 'Wooden Stacking Rings',
    price: 599,
    image: '/products/rings.jpg',
    category: 'toys',
    ageRange: ['0', '3', '6'],
    rating: 5,
    reviews: 24,
  },
  {
    id: '2',
    name: 'Montessori Wooden Blocks',
    price: 899,
    image: '/products/blocks.jpg',
    category: 'toys',
    ageRange: ['6', '9', '12'],
    rating: 4.5,
    reviews: 18,
  },
  {
    id: '3',
    name: 'Beaded Counting Frame',
    price: 799,
    image: '/products/beads.jpg',
    category: 'developmental',
    ageRange: ['3', '6', '9'],
    rating: 5,
    reviews: 32,
  },
  {
    id: '4',
    name: 'Wooden Shape Sorter',
    price: 649,
    image: '/products/sorter.jpg',
    category: 'toys',
    ageRange: ['9', '12', '15'],
    rating: 4,
    reviews: 15,
  },
  {
    id: '5',
    name: 'Rainbow Stacking Rings Deluxe',
    price: 749,
    image: '/products/rings.jpg',
    category: 'puzzles',
    ageRange: ['6', '9', '12'],
    rating: 5,
    reviews: 28,
  },
  {
    id: '6',
    name: 'Wooden Block Set Premium',
    price: 1199,
    image: '/products/blocks.jpg',
    category: 'kits',
    ageRange: ['12', '15', '18'],
    rating: 4.5,
    reviews: 22,
  },
  {
    id: '7',
    name: 'Advanced Counting Frame',
    price: 899,
    image: '/products/beads.jpg',
    category: 'developmental',
    ageRange: ['9', '12', '15'],
    rating: 5,
    reviews: 19,
  },
  {
    id: '8',
    name: 'Shape & Color Sorter Combo',
    price: 799,
    image: '/products/sorter.jpg',
    category: 'toys',
    ageRange: ['12', '15', '18'],
    rating: 4.5,
    reviews: 20,
  },
  {
    id: '9',
    name: 'Classic Stacking Rings',
    price: 499,
    image: '/products/rings.jpg',
    category: 'toys',
    ageRange: ['3', '6', '9'],
    rating: 4,
    reviews: 12,
  },
  {
    id: '10',
    name: 'Starter Wooden Blocks',
    price: 599,
    image: '/products/blocks.jpg',
    category: 'toys',
    ageRange: ['0', '3', '6'],
    rating: 4,
    reviews: 10,
  },
  {
    id: '11',
    name: 'Basic Counting Frame',
    price: 599,
    image: '/products/beads.jpg',
    category: 'developmental',
    ageRange: ['6', '9', '12'],
    rating: 4,
    reviews: 8,
  },
  {
    id: '12',
    name: 'Mini Shape Sorter',
    price: 449,
    image: '/products/sorter.jpg',
    category: 'toys',
    ageRange: ['9', '12', '15'],
    rating: 3.5,
    reviews: 5,
  },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
  { label: 'Best Rated', value: 'rating' },
]

export default function ShopPage() {
  const searchParams = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  const [showMobileFilter, setShowMobileFilter] = useState(false)

  const ageParam = searchParams.get('age')
  const categoryParam = searchParams.get('category')
  const priceParam = searchParams.get('price')

  let filteredProducts = allProducts

  // Filter by age
  if (ageParam) {
    filteredProducts = filteredProducts.filter((p) => p.ageRange.includes(ageParam))
  }

  // Filter by category
  if (categoryParam) {
    filteredProducts = filteredProducts.filter((p) => p.category === categoryParam)
  }

  // Filter by price
  if (priceParam) {
    const [minStr, maxStr] = priceParam.split('-')
    const min = parseInt(minStr)
    const max = maxStr ? parseInt(maxStr) : Infinity
    filteredProducts = filteredProducts.filter((p) => p.price >= min && p.price <= max)
  }

  // Sort products
  if (sortBy === 'price-asc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-desc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => (b.rating || 0) - (a.rating || 0))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-secondary-foreground mb-4">Shop Our Collection</h1>
          <p className="text-secondary-foreground/60">Choose from our premium selection of wooden toys</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <aside className="hidden lg:block lg:sticky lg:top-20">
            <FilterSidebar selectedAge={ageParam || undefined} selectedCategory={categoryParam || undefined} />
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowMobileFilter(!showMobileFilter)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
            >
              <SlidersHorizontal size={20} />
              Show Filters
            </button>
            {showMobileFilter && (
              <div className="mt-4 animate-slide-down">
                <FilterSidebar selectedAge={ageParam || undefined} selectedCategory={categoryParam || undefined} onClose={() => setShowMobileFilter(false)} />
              </div>
            )}
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-foreground/60">
                  Showing <span className="font-semibold">{filteredProducts.length}</span> products
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-foreground/60 text-sm">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-card border border-border px-4 py-2 rounded-lg text-foreground cursor-pointer pr-8"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* No Products */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-foreground/60 text-lg">No products found</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
