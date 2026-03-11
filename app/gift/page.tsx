import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Gift, Package, Heart } from 'lucide-react'

const giftKits = [
  {
    id: 1,
    name: 'Newborn Starter Kit',
    description: 'Perfect for new parents - gentle sensory toys for 0-6 months',
    price: '₹2,499',
    items: 4,
    color: 'from-pink-100 to-rose-100',
  },
  {
    id: 2,
    name: 'Toddler Explorer Pack',
    description: 'Engaging toys for crawling and early walking - 6-12 months',
    price: '₹3,499',
    items: 6,
    color: 'from-blue-100 to-cyan-100',
  },
  {
    id: 3,
    name: 'Learning Milestone Set',
    description: 'Educational toys for cognitive development - 12-18 months',
    price: '₹4,999',
    items: 8,
    color: 'from-green-100 to-emerald-100',
  },
  {
    id: 4,
    name: 'Creative Growth Bundle',
    description: 'Advanced learning tools for development - 18-24 months',
    price: '₹5,999',
    items: 10,
    color: 'from-purple-100 to-violet-100',
  },
]

export default function GiftPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Gift size={32} className="text-accent" />
            <h1 className="text-4xl font-bold text-secondary-foreground">Gift Kits & Cards</h1>
          </div>
          <p className="text-secondary-foreground/60 max-w-2xl">
            Thoughtfully curated gift sets for every milestone. Perfect for baby showers, celebrations, and special occasions.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Gift Kits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-4">Gift Kits by Age</h2>
          <p className="text-foreground/60 mb-12">Each kit is carefully curated with age-appropriate toys for optimal development</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {giftKits.map((kit) => (
              <div key={kit.id} className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all hover:shadow-lg">
                <div className={`h-48 bg-gradient-to-br ${kit.color} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <Package size={80} className="text-foreground/20" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{kit.name}</h3>
                  <p className="text-foreground/60 mb-4">{kit.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-3xl font-bold text-primary">{kit.price}</p>
                      <p className="text-sm text-muted-foreground">{kit.items} items included</p>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gift Cards Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-4">Digital Gift Cards</h2>
          <p className="text-foreground/60 mb-12">Give the gift of choice with digital gift cards</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1000, 2500, 5000, 10000].map((amount) => (
              <div key={amount} className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary transition-all cursor-pointer group">
                <Heart size={40} className="mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                <p className="text-4xl font-bold text-primary mb-2">₹{amount.toLocaleString()}</p>
                <p className="text-foreground/60 mb-6">Gift Card</p>
                <button className="w-full py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition font-medium">
                  Choose
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Gift Wrapping Section */}
        <div className="bg-secondary rounded-lg p-12 border border-border">
          <h2 className="text-3xl font-bold text-secondary-foreground mb-4">Free Gift Wrapping</h2>
          <p className="text-secondary-foreground/60 mb-6 max-w-2xl">
            We offer complimentary eco-friendly gift wrapping for all orders. Add a personalized message card to make it extra special.
          </p>
          <div className="space-y-4 mb-8">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" defaultChecked />
              <span className="text-secondary-foreground">Include gift wrapping</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-secondary-foreground">Add personalized message card</span>
            </label>
          </div>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition">
            Continue Shopping
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
