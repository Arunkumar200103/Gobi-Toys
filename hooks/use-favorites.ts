'use client'

import { useState, useEffect } from 'react'

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  // Load favorites from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('ariro-favorites')
    if (saved) {
      try {
        setFavorites(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to load favorites:', e)
      }
    }
    setMounted(true)
  }, [])

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('ariro-favorites', JSON.stringify(favorites))
    }
  }, [favorites, mounted])

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId)
      } else {
        return [...prev, productId]
      }
    })
  }

  const isFavorite = (productId: string) => favorites.includes(productId)

  const addFavorite = (productId: string) => {
    setFavorites((prev) => {
      if (!prev.includes(productId)) {
        return [...prev, productId]
      }
      return prev
    })
  }

  const removeFavorite = (productId: string) => {
    setFavorites((prev) => prev.filter((id) => id !== productId))
  }

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    addFavorite,
    removeFavorite,
    favoriteCount: favorites.length,
  }
}
