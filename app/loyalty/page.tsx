import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Star, Gift, Zap, Users } from 'lucide-react'

const tiers = [
  {
    name: 'Silver',
    points: '0 - 999',
    benefits: ['Welcome bonus: 100 points', '1 point per ₹10 spent', 'Birthday discount: 10%'],
    color: 'from-gray-100 to-gray-200',
    icon: Star,
  },
  {
    name: 'Gold',
    points: '1,000 - 4,999',
    benefits: ['1.5 points per ₹10 spent', 'Birthday discount: 15%', 'Exclusive sales early access'],
    color: 'from-yellow-100 to-amber-100',
    icon: Zap,
  },
  {
    name: 'Platinum',
    points: '5,000+',
    benefits: ['2 points per ₹10 spent', 'Birthday discount: 20%', 'Free shipping on all orders', 'VIP customer support'],
    color: 'from-indigo-100 to-purple-100',
    icon: Gift,
  },
]

export default function LoyaltyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-secondary-foreground mb-4">Loyalty Rewards Program</h1>
          <p className="text-secondary-foreground/60 max-w-2xl">
            Earn points on every purchase and unlock exclusive benefits. Join our community of happy parents.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Sign Up', desc: 'Create an account to start earning' },
              { step: 2, title: 'Earn Points', desc: '1 point for every ₹10 spent' },
              { step: 3, title: 'Unlock Rewards', desc: 'Redeem points for discounts' },
              { step: 4, title: 'Enjoy Benefits', desc: 'Level up for exclusive perks' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tier System */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-4">Membership Tiers</h2>
          <p className="text-foreground/60 mb-12">Reach new levels and unlock more rewards</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => {
              const IconComponent = tier.icon
              return (
                <div key={tier.name} className={`bg-gradient-to-br ${tier.color} rounded-lg p-8 border-2 border-transparent hover:border-primary transition-all group`}>
                  <IconComponent size={48} className="text-foreground/40 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                  <p className="text-sm text-foreground/60 mb-6">{tier.points} points</p>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Star size={16} className="text-accent flex-shrink-0 mt-1" />
                        <span className="text-foreground text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* Rewards Catalog */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Redeem Your Points</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { points: 500, reward: '₹250 Discount', description: 'On any purchase' },
              { points: 1000, reward: '₹500 Discount', description: 'On any purchase' },
              { points: 2000, reward: '₹1000 Discount', description: 'On any purchase' },
              { points: 3000, reward: 'Free Gift Kit', description: 'Choose any kit' },
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all text-center">
                <p className="text-3xl font-bold text-primary mb-2">{item.points}</p>
                <p className="text-sm text-muted-foreground mb-4">Points Required</p>
                <p className="text-xl font-semibold text-foreground mb-1">{item.reward}</p>
                <p className="text-sm text-foreground/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Referral Program */}
        <div className="bg-secondary rounded-lg p-12 border border-border">
          <div className="flex items-start gap-4 mb-6">
            <Users size={32} className="text-primary flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-secondary-foreground mb-2">Referral Program</h2>
              <p className="text-secondary-foreground/60">Share the joy with friends and family</p>
            </div>
          </div>
          <div className="bg-background rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-foreground mb-4">How It Works:</h3>
            <ul className="space-y-3 text-foreground/60">
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">1.</span>
                <span>Share your unique referral code with friends</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">2.</span>
                <span>They get a 10% discount on their first purchase</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">3.</span>
                <span>You earn 500 bonus points per successful referral</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">4.</span>
                <span>No limit on how many friends you can refer</span>
              </li>
            </ul>
          </div>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition">
            Get Your Referral Code
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
