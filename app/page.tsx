'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TrustBadges } from '@/components/trust-badges'
import { ProductCard } from '@/components/product-card'
import { ArrowRight, icons ,Layers, Blocks, GraduationCap, Sparkles, Utensils } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const featuredProducts = [
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
]

const categoryIcons: Record<string, LucideIcon> = {
  toys: Layers,
  puzzles: Blocks,
  developmental: GraduationCap,
  kits: Sparkles,
  furniture: icons['Table'],
  utensils: Utensils,
};

const categories = [
  { name: "Stacking Toys", value: "toys", count: 12 },
  { name: "Building Sets", value: "puzzles", count: 8 },
  { name: "Learning Toys", value: "developmental", count: 15 },
  { name: "Sensory Toys", value: "kits", count: 10 },
  { name: "Montessori Furniture", value: "furniture", count: 5 },
  { name: "Kids Utensils", value: "utensils", count: 7 }
];

const testimonials = [
  {
    author: 'Priya Sharma',
    text: 'Best quality wooden toys! My baby loves them and they are so safe. Highly recommended!',
    rating: 5,
  },
  {
    author: 'Amit Patel',
    text: 'The attention to detail is amazing. These toys are perfect for Montessori learning.',
    rating: 5,
  },
  {
    author: 'Sarah Kumar',
    text: 'Great customer service and fast delivery. The toys are exactly as described.',
    rating: 5,
  },
]

function CategorySkeleton() {
  return (
    <div className="p-6 bg-card rounded-xl border border-border animate-pulse shrink-0
      w-16 md:w-auto">
      <div className="w-10 h-10 rounded-lg bg-muted md:mb-4" />
      <div className="hidden md:block h-4 bg-muted rounded w-3/4 mb-3" />
      <div className="hidden md:block h-3 bg-muted rounded w-1/3" />
    </div>
  );
}


interface CategoriesSectionProps {
  loading?: boolean;
}
export default function Home({ loading = false }: CategoriesSectionProps) {
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    if (!email) return
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-secondary overflow-hidden mt-[-45px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Premium Wooden Toys for Your Little One
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                India's No.1 Montessori Toy Brand. Safe, natural, and designed to nurture your child's development.
              </p>
              <div className="flex gap-4">
                <Link href="/shop">
                  <Button className="bg-primary text-primary-foreground hover:bg-accent px-8 py-3 text-lg">
                    Shop Now
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="px-8 py-3 text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-96 md:h-full">
              <Image
                src="/hero.jpg"
                alt="Premium wooden toys"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

   <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12">
          {loading ? (
            <div className="animate-pulse space-y-3">
              <div className="h-9 bg-muted rounded w-56" />
              <div className="h-5 bg-muted rounded w-72" />
            </div>
          ) : (
            <>
              <h2 className="text-4xl font-bold text-foreground mb-4">Shop by Category</h2>
              <p className="text-foreground/60">Explore our carefully curated collection</p>
            </>
          )}
        </div>

        {/* Mobile: horizontal scroll icon-only row | Desktop: full grid */}
        <div className="flex gap-3 overflow-x-auto scrollbar-none md:overflow-visible
          md:grid md:grid-cols-4 md:gap-4">
          {loading
            ? Array.from({ length: 4 }, (_, i) => <CategorySkeleton key={i} />)
            : categories.map((cat, i) => {
                const Icon = categoryIcons[cat.value];
                return (
                  <Link key={i} href={`/shop?category=${cat.value}`} className="shrink-0 md:shrink">

                    {/* Mobile: icon-only pill */}
                    <div className="md:hidden flex flex-col items-center gap-2">
                      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 text-primary active:bg-primary active:text-primary-foreground transition-colors">
                        {Icon && <Icon size={22} strokeWidth={1.7} />}
                      </div>
                      <span className="text-xs text-muted-foreground text-center leading-tight w-14 truncate">
                        {cat.name}
                      </span>
                    </div>

                    {/* Desktop: full card */}
                    <div className="hidden md:block p-6 bg-card rounded-xl border border-border hover:border-primary hover:shadow-md transition-all cursor-pointer group">
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {Icon && <Icon size={20} strokeWidth={1.7} />}
                      </div>
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {cat.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{cat.count} products</p>
                    </div>

                  </Link>
                );
              })}
        </div>

      </div>
    </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold text-secondary-foreground mb-4">Best Sellers</h2>
              <p className="text-secondary-foreground/60">Loved by parents across India</p>
            </div>
            <Link href="/shop">
              <Button variant="ghost" className="text-secondary-foreground hover:text-primary">
                View All <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Parents Love</h2>
            <p className="text-foreground/60">Join thousands of happy families</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-card p-8 rounded-lg border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-2xl">★</span>
                  ))}
                </div>
                <p className="text-foreground mb-4 text-lg italic">{testimonial.text}</p>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-base sm:text-lg mb-8 opacity-90">
            Get exclusive offers and new product launches delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="w-full sm:w-auto px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}