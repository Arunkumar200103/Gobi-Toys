'use client'

import { useSearchParams } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { Search as SearchIcon } from 'lucide-react'

const allProducts = [
  {
    id: '1',
    name: 'Wooden Stacking Rings',
    price: 599,
    image: '/products/rings.jpg',
    category: 'toys',
    rating: 5,
    reviews: 24,
  },
  {
    id: '2',
    name: 'Montessori Wooden Blocks',
    price: 899,
    image: '/products/blocks.jpg',
    category: 'toys',
    rating: 4.5,
    reviews: 18,
  },
  {
    id: '3',
    name: 'Beaded Counting Frame',
    price: 799,
    image: '/products/beads.jpg',
    category: 'developmental',
    rating: 5,
    reviews: 32,
  },
  {
    id: '4',
    name: 'Wooden Shape Sorter',
    price: 649,
    image: '/products/sorter.jpg',
    category: 'toys',
    rating: 4,
    reviews: 15,
  },
  {
    id: '5',
    name: 'Rainbow Stacking Rings Deluxe',
    price: 749,
    image: '/products/rings.jpg',
    category: 'puzzles',
    rating: 5,
    reviews: 28,
  },
  {
    id: '6',
    name: 'Wooden Block Set Premium',
    price: 1199,
    image: '/products/blocks.jpg',
    category: 'kits',
    rating: 4.5,
    reviews: 22,
  },
  {
    id: '7',
    name: 'Advanced Counting Frame',
    price: 899,
    image: '/products/beads.jpg',
    category: 'developmental',
    rating: 5,
    reviews: 19,
  },
  {
    id: '8',
    name: 'Shape & Color Sorter Combo',
    price: 799,
    image: '/products/sorter.jpg',
    category: 'toys',
    rating: 4.5,
    reviews: 20,
  },
  {
    id: '9',
    name: 'Classic Stacking Rings',
    price: 499,
    image: '/products/rings.jpg',
    category: 'toys',
    rating: 4,
    reviews: 12,
  },
  {
    id: '10',
    name: 'Starter Wooden Blocks',
    price: 599,
    image: '/products/blocks.jpg',
    category: 'toys',
    rating: 4,
    reviews: 10,
  },
  {
    id: '11',
    name: 'Basic Counting Frame',
    price: 599,
    image: '/products/beads.jpg',
    category: 'developmental',
    rating: 4,
    reviews: 8,
  },
  {
    id: '12',
    name: 'Mini Shape Sorter',
    price: 449,
    image: '/products/sorter.jpg',
    category: 'toys',
    rating: 3.5,
    reviews: 5,
  },
]

export default function SearchClient() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  const searchResults = allProducts.filter((product) => {
    const searchTerm = query.toLowerCase()
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    )
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <SearchIcon size={32} className="text-primary" />
            <h1 className="text-4xl font-bold text-secondary-foreground">
              Search Results
            </h1>
          </div>

          <p className="text-secondary-foreground/60">
            {query && (
              <>
                Found <span className="font-semibold">{searchResults.length}</span>{" "}
                result{searchResults.length !== 1 ? "s" : ""} for "{query}"
              </>
            )}
            {!query && "Enter a search term to find products"}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {query ? (
          <>
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {searchResults.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <SearchIcon
                  size={64}
                  className="mx-auto mb-4 text-muted-foreground opacity-30"
                />
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  No Products Found
                </h2>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <SearchIcon
              size={64}
              className="mx-auto mb-4 text-muted-foreground opacity-30"
            />
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Start Searching
            </h2>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}