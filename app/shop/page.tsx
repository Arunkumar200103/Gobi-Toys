'use client'

import { Suspense } from 'react'
import ShopContent from './shop-content'

export const dynamic = "force-dynamic"

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ShopContent />
    </Suspense>
  )
}