'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react'

export default function CartPage() {
  const cartItems = [
    {
      id: '1',
      name: 'Wooden Stacking Rings',
      price: 599,
      quantity: 1,
      image: '/products/rings.jpg',
    },
    {
      id: '2',
      name: 'Montessori Wooden Blocks',
      price: 899,
      quantity: 1,
      image: '/products/blocks.jpg',
    },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 100
  const tax = Math.round(subtotal * 0.05)
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-secondary-foreground">Shopping Cart</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {cartItems.length > 0 ? (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="bg-card border border-border rounded-lg p-6 flex gap-6">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-secondary rounded-lg flex-shrink-0 flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <Link href={`/products/${item.id}`}>
                          <h3 className="text-lg font-semibold text-foreground hover:text-primary transition mb-2">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="text-2xl font-bold text-primary mb-4">
                          ₹{item.price.toLocaleString()}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border border-border rounded-lg">
                            <button className="px-3 py-1 text-foreground hover:bg-muted transition">
                              <Minus size={16} />
                            </button>
                            <span className="px-4 py-1 font-semibold text-foreground">
                              {item.quantity}
                            </span>
                            <button className="px-3 py-1 text-foreground hover:bg-muted transition">
                              <Plus size={16} />
                            </button>
                          </div>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>

                      {/* Line Total */}
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground mb-2">Line Total</p>
                        <p className="text-2xl font-bold text-foreground">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-card border border-border rounded-lg p-12 text-center">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Your cart is empty</h3>
                  <p className="text-muted-foreground mb-8">Start shopping to add items to your cart</p>
                  <Link href="/shop">
                    <Button className="bg-primary text-primary-foreground">
                      <ArrowLeft size={16} className="mr-2" />
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-foreground">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Shipping</span>
                    <span>₹{shipping}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Tax (5%)</span>
                    <span>₹{tax}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-8">
                  <span className="text-lg font-bold text-foreground">Total</span>
                  <span className="text-3xl font-bold text-primary">
                    ₹{total.toLocaleString()}
                  </span>
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-accent py-3 text-lg mb-4">
                  Proceed to Checkout
                </Button>

                <Link href="/shop">
                  <Button variant="outline" className="w-full py-3">
                    Continue Shopping
                  </Button>
                </Link>

                <div className="mt-6 pt-6 border-t border-border space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-green-600">
                    <span className="text-lg">✓</span>
                    <span>Free shipping on orders above ₹500</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <span className="text-lg">✓</span>
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <span className="text-lg">✓</span>
                    <span>Secure checkout with SSL encryption</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
