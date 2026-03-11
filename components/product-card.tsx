'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useFavorites } from '@/hooks/use-favorites'
import { useState } from 'react'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  rating?: number
  reviews?: number
  category?: string
}

export function ProductCard({
  id,
  name,
  price,
  image,
  rating = 4.5,
  reviews = 0,
  category,
}: ProductCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const [isFav, setIsFav] = useState(false)

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    toggleFavorite(id)
    setIsFav(!isFav)
  }

  return (
    <Link href={`/products/${id}`}>
      <div className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
        {/* Image Container */}
        <div className="relative bg-secondary overflow-hidden h-72 flex items-center justify-center">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-all transform hover:scale-110 z-10"
          >
            <Heart
              size={20}
              className={`transition-all ${
                isFavorite(id) ? 'fill-accent text-accent' : 'text-foreground'
              }`}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {category && (
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
              {category}
            </p>
          )}
          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(rating) ? 'fill-accent text-accent' : 'text-muted'}
                />
              ))}
            </div>
            {reviews > 0 && (
              <span className="text-xs text-muted-foreground">({reviews})</span>
            )}
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              ₹{price.toLocaleString()}
            </div>
            <button className="p-2 bg-accent text-accent-foreground rounded-lg hover:bg-primary transition hover:scale-110 transform">
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
