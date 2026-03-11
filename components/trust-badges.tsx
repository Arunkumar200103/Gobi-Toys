import { CheckCircle, Leaf, Lock, Truck } from 'lucide-react'

export function TrustBadges() {
  const badges = [
    {
      icon: CheckCircle,
      title: '100% Safe & Tested',
      description: 'All toys certified and safety tested',
    },
    {
      icon: Leaf,
      title: 'Natural Materials',
      description: 'Premium quality wooden toys',
    },
    {
      icon: Lock,
      title: 'Secure Checkout',
      description: 'Protected payment methods',
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders above ₹500',
    },
  ]

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {badges.map((badge, i) => {
            const Icon = badge.icon
            return (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-secondary rounded-full">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
