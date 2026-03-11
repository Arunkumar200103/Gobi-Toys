'use client'

import { useState, use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import { Heart, Share2, Truck, Shield, RotateCcw, Star } from 'lucide-react'

const productDetails: Record<string, any> = {
  '1': {
    name: 'Wooden Stacking Rings',
    price: 599,
    rating: 5,
    reviews: 24,
    category: 'Stacking Toys',
    image: '/products/rings.jpg',
    description:
      'Colorful wooden stacking rings toy perfect for developing motor skills and hand-eye coordination. Made from premium quality wood with smooth finishes.',
    features: [
      'Premium hardwood construction',
      'Smooth, rounded edges for safety',
      'Bright, non-toxic paint',
      'Develops motor skills and coordination',
      'Recommended for ages 6 months+',
      'Easy to clean and maintain',
    ],
    specifications: {
      Material: 'Premium Hardwood',
      Dimensions: '15cm (Height) x 8cm (Diameter)',
      Weight: '250g',
      Color: 'Natural wood with multicolor rings',
      SafetyCertification: 'CE Certified',
    },
    stock: 45,
  },
  '2': {
    name: 'Montessori Wooden Blocks',
    price: 899,
    rating: 4.5,
    reviews: 18,
    category: 'Building Toys',
    image: '/products/blocks.jpg',
    description:
      'A comprehensive set of premium wooden blocks for creative building and learning. Perfect for Montessori-style education.',
    features: [
      'Set of 50+ natural wood blocks',
      'Multiple shapes and sizes',
      'Promotes spatial awareness',
      'Eco-friendly and sustainable',
      'Suitable for ages 2+',
      'Includes wooden storage box',
    ],
    specifications: {
      Material: 'Sustainable Hardwood',
      Pieces: '50+',
      StorageBox: 'Wooden box included',
      Color: 'Natural wood finish',
      SafetyCertification: 'ISO 8124 Certified',
    },
    stock: 32,
  },
  '3': {
    name: 'Beaded Counting Frame',
    price: 799,
    rating: 5,
    reviews: 32,
    category: 'Learning Toys',
    image: '/products/beads.jpg',
    description:
      'Educational counting frame with colorful wooden beads. An excellent tool for teaching numbers and basic math concepts.',
    features: [
      '100 wooden beads on 10 strings',
      'Colorful and engaging design',
      'Teaches counting and basic math',
      'Sturdy wooden frame',
      'Perfect for ages 2-5',
      'Develops logical thinking',
    ],
    specifications: {
      Material: 'Premium Hardwood with wooden beads',
      BeadCount: '100 beads (10 per string)',
      Strings: '10 strings',
      Dimensions: '20cm x 15cm x 8cm',
      SafetyCertification: 'CE & CPSIA Certified',
    },
    stock: 28,
  },
}

const relatedProducts = [
  {
    id: '2',
    name: 'Montessori Wooden Blocks',
    price: 899,
    image: '/products/blocks.jpg',
    category: 'Building Toys',
    rating: 4.5,
    reviews: 18,
  },
  {
    id: '3',
    name: 'Beaded Counting Frame',
    price: 799,
    image: '/products/beads.jpg',
    category: 'Learning Toys',
    rating: 5,
    reviews: 32,
  },
  {
    id: '4',
    name: 'Wooden Shape Sorter',
    price: 649,
    image: '/products/sorter.jpg',
    category: 'Educational',
    rating: 4,
    reviews: 15,
  },
]

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  // `params` is a promise in client components, so unwrap it with React.use
  const { id } = use(params)
  const product = productDetails[id] || productDetails['1']
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-foreground">Shop</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="bg-secondary rounded-lg p-8 flex items-center justify-center h-96">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                  {product.category}
                </p>
                <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted'}
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Price and Stock */}
              <div className="mb-8 pb-8 border-b border-border">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-5xl font-bold text-primary">
                    ₹{product.price}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ₹{Math.round(product.price * 1.2)}
                  </span>
                </div>
                <p className="text-green-600 font-semibold mb-4">
                  {product.stock > 10 ? '✓ In Stock' : `Only ${product.stock} left!`}
                </p>
              </div>

              {/* Description */}
              <p className="text-foreground/80 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Quantity and Actions */}
              <div className="mb-8 flex gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-foreground hover:bg-muted transition"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 text-foreground font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-foreground hover:bg-muted transition"
                  >
                    +
                  </button>
                </div>
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-accent py-2 text-lg"
                >
                  Add to Cart
                </Button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition"
                >
                  <Heart
                    size={20}
                    className={isWishlisted ? 'fill-accent text-accent' : 'text-foreground'}
                  />
                </button>
                <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition">
                  <Share2 size={20} className="text-foreground" />
                </button>
              </div>

              {/* Trust Info */}
              <div className="grid grid-cols-2 gap-4 py-8 border-y border-border">
                <div className="flex items-center gap-3">
                  <Truck className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Free Shipping</p>
                    <p className="text-sm text-muted-foreground">On orders above ₹500</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">100% Safe</p>
                    <p className="text-sm text-muted-foreground">CE Certified</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Easy Returns</p>
                    <p className="text-sm text-muted-foreground">30-day returns</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Top Rated</p>
                    <p className="text-sm text-muted-foreground">Trusted by parents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features and Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Specifications</h3>
              <dl className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-border pb-3">
                    <dt className="text-foreground font-semibold">{key}</dt>
                    <dd className="text-muted-foreground text-right">{value as string}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="mb-16 bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Customer Reviews</h3>
            <div className="space-y-6">
              {[1, 2, 3].map((review) => (
                <div key={review} className="pb-6 border-b border-border last:border-b-0">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold text-foreground">Happy Parent</p>
                      <p className="text-sm text-muted-foreground">Verified Purchase</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground">
                    Excellent quality product! My baby loves these toys and they're very safe. Highly recommended!
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Related Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((prod) => (
                <ProductCard key={prod.id} {...prod} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
