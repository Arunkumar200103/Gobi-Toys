'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
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

export default function SearchPage() {

  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q') || ''

  const [search, setSearch] = useState(query)

  useEffect(() => {
    setSearch(query)
  }, [query])

  const handleSearch = (e:any) => {
    e.preventDefault()

    if (!search.trim()) return

    router.push(`/search?q=${search}`)
  }

  const searchResults = allProducts.filter((product) => {
    const term = query.toLowerCase()

    return (
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    )
  })

  return (
    <div className="min-h-screen bg-background">

      <Navbar />

      {/* Header */}
      <section className="py-8 sm:py-12 bg-secondary border-b border-border">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-3 mb-6">
            <SearchIcon className="text-primary" size={28} />
            <h1 className="text-2xl sm:text-4xl font-bold">
              Search Products
            </h1>
          </div>

          {/* Search Input */}
          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row gap-3 max-w-xl"
          >

            <input
              type="text"
              placeholder="Search toys, blocks, puzzles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition"
            >
              Search
            </button>

          </form>

          {query && (
            <p className="mt-4 text-sm text-muted-foreground">
              Found {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for "{query}"
            </p>
          )}

        </div>

      </section>

      {/* Results */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {query ? (

          searchResults.length > 0 ? (

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

              <h2 className="text-xl sm:text-2xl font-semibold">
                No Products Found
              </h2>

              <p className="text-muted-foreground">
                Try searching with another keyword
              </p>

            </div>

          )

        ) : (

          <div className="text-center py-20">

            <SearchIcon
              size={64}
              className="mx-auto mb-4 text-muted-foreground opacity-30"
            />

            <h2 className="text-xl sm:text-2xl font-semibold">
              Start Searching
            </h2>

            <p className="text-muted-foreground">
              Type something in the search box above
            </p>

          </div>

        )}

      </section>

      <Footer />

    </div>
  )
}