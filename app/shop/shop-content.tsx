'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FilterSidebar } from '@/components/filter-sidebar'
import { ProductCard } from '@/components/product-card'

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
    category: 'puzzles',
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
    name: 'Sensory Sound Blocks',
    price: 549,
    image: '/products/sound.png',
    category: 'kits',
    rating: 4.5,
    reviews: 20,
  },
  {
    id: '6',
    name: 'Puzzle Board Animals',
    price: 699,
    image: '/products/puzzle.png',
    category: 'puzzles',
    rating: 5,
    reviews: 28,
  },
  {
    id: '7',
    name: 'Montessori Number Rods',
    price: 849,
    image: '/products/rods.png',
    category: 'developmental',
    rating: 4,
    reviews: 12,
  },
  {
    id: '8',
    name: 'Wooden Activity Gym',
    price: 1299,
    image: '/products/gym.png',
    category: 'kits',
    rating: 5,
    reviews: 35,
  },
  {
    id: '9',
    name: 'Rainbow Stacker',
    price: 749,
    image: '/products/rainbow.jpg',
    category: 'toys',
    rating: 5,
    reviews: 41,
  },
  {
    id: '10',
    name: 'Wooden Xylophone',
    price: 499,
    image: '/products/xylophone.jpg',
    category: 'kits',
    rating: 4,
    reviews: 19,
  },
{
    id: '11',
    name: 'Shape & Color Sorter',
    price: 799,
    image: '/products/sorter.jpg',
    category: 'toys',
    rating: 4.5,
    reviews: 22,
  }
  ,{
    id: '12',
    name: 'Montessori Dining Set',
    price: 1499,
    image: '/products/dining.jpg',
    category: 'furniture',
    rating: 5,
    reviews: 35,

  },
  {
    id: '13',
    name: 'Wooden High Chair',
    price: 1999,
    image: '/products/highchair.jpg',
    category: 'furniture',
    rating: 4.5,
    reviews: 25,
  },
{
 
    id: '14',
    name: 'Kids Bamboo Utensil Set',
    price: 399,
    image: '/products/utensils.jpg',
    category: 'utensils',
    rating: 4,
    reviews: 18,
}
]

const categoryLabels: Record<string, string> = {
  toys: 'Stacking Toys',
  puzzles: 'Wooden Puzzles',
  developmental: 'Developmental Aids',
  furniture: 'Montessori Furniture',
  utensils: 'Kids Utensils',
  kits: 'Montessori Kits',
}

function ShopContent() {
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get('category') || undefined
  const selectedAge = searchParams.get('age') || undefined
  const selectedPrice = searchParams.get('price') || undefined

  const filteredProducts = allProducts.filter((product) => {
    // Category filter
    if (selectedCategory && product.category !== selectedCategory) return false

    // Price filter
    if (selectedPrice) {
      const parts = selectedPrice.split('-')
      const min = Number(parts[0])
      const max = parts[1] ? Number(parts[1]) : null
      if (max) {
        if (product.price < min || product.price > max) return false
      } else {
        if (product.price < min) return false
      }
    }

    return true
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            {selectedCategory ? categoryLabels[selectedCategory] : 'All Products'}
          </h1>
          <p className="text-muted-foreground mt-1">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <FilterSidebar
            selectedAge={selectedAge}
            selectedCategory={selectedCategory}
          />

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <p className="text-xl font-semibold text-foreground mb-2">No products found</p>
                <p className="text-muted-foreground">Try adjusting or clearing your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground text-lg">Loading...</p>
      </div>
    }>
      <ShopContent />
    </Suspense>
  )
}