'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { useFavorites } from '@/hooks/use-favorites'
import { Heart } from 'lucide-react'

const allProducts: Record<string, any> = {
  '1': {
    id: '1',
    name: 'Wooden Stacking Rings',
    price: 599,
    image: '/products/rings.jpg',
    category: 'toys',
    rating: 5,
    reviews: 24,
  },
  '2': {
    id: '2',
    name: 'Montessori Wooden Blocks',
    price: 899,
    image: '/products/blocks.jpg',
    category: 'toys',
    rating: 4.5,
    reviews: 18,
  },
  '3': {
    id: '3',
    name: 'Beaded Counting Frame',
    price: 799,
    image: '/products/beads.jpg',
    category: 'developmental',
    rating: 5,
    reviews: 32,
  },
  '4': {
    id: '4',
    name: 'Wooden Shape Sorter',
    price: 649,
    image: '/products/sorter.jpg',
    category: 'toys',
    rating: 4,
    reviews: 15,
  },
  '5': {
    id: '5',
    name: 'Rainbow Stacking Rings Deluxe',
    price: 749,
    image: '/products/rings.jpg',
    category: 'puzzles',
    rating: 5,
    reviews: 28,
  },
  '6': {
    id: '6',
    name: 'Wooden Block Set Premium',
    price: 1199,
    image: '/products/blocks.jpg',
    category: 'kits',
    rating: 4.5,
    reviews: 22,
  },
  '7': {
    id: '7',
    name: 'Advanced Counting Frame',
    price: 899,
    image: '/products/beads.jpg',
    category: 'developmental',
    rating: 5,
    reviews: 19,
  },
  '8': {
    id: '8',
    name: 'Shape & Color Sorter Combo',
    price: 799,
    image: '/products/sorter.jpg',
    category: 'toys',
    rating: 4.5,
    reviews: 20,
  },
  '9': {
    id: '9',
    name: 'Classic Stacking Rings',
    price: 499,
    image: '/products/rings.jpg',
    category: 'toys',
    rating: 4,
    reviews: 12,
  },
  '10': {
    id: '10',
    name: 'Starter Wooden Blocks',
    price: 599,
    image: '/products/blocks.jpg',
    category: 'toys',
    rating: 4,
    reviews: 10,
  },
  '11': {
    id: '11',
    name: 'Basic Counting Frame',
    price: 599,
    image: '/products/beads.jpg',
    category: 'developmental',
    rating: 4,
    reviews: 8,
  },
  '12': {
    id: '12',
    name: 'Mini Shape Sorter',
    price: 449,
    image: '/products/sorter.jpg',
    category: 'toys',
    rating: 3.5,
    reviews: 5,
  },
}

export default function WishlistPage() {
  const { favorites } = useFavorites()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const favoriteProducts = favorites.map((id) => allProducts[id]).filter(Boolean)

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Heart size={32} className="text-accent fill-accent" />
            <h1 className="text-4xl font-bold text-secondary-foreground">My Wishlist</h1>
          </div>
          <p className="text-secondary-foreground/60">
            {favoriteProducts.length} item{favoriteProducts.length !== 1 ? 's' : ''} saved
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {favoriteProducts.length > 0 ? (
          <>
            <div className="mb-8">
              <p className="text-foreground/60">
                You have saved <span className="font-semibold">{favoriteProducts.length}</span> items to your wishlist
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {favoriteProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <Heart size={64} className="mx-auto mb-4 text-muted-foreground opacity-30" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">Your Wishlist is Empty</h2>
            <p className="text-foreground/60 mb-8 max-w-md mx-auto">
              Start adding your favorite wooden toys to your wishlist by clicking the heart icon on product cards
            </p>
            <Link href="/shop">
              <button className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
