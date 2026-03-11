import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Briefcase, Package, Users, TrendingUp } from 'lucide-react'

const bulkCategories = [
  {
    title: 'Preschool & Childcare',
    description: 'Educational toys for group learning environments',
    icon: Users,
    benefits: ['Bulk pricing for schools', 'Curriculum-aligned toys', 'Durability certified', 'Custom quotes'],
    ctaText: 'Get Preschool Quote',
  },
  {
    title: 'Retail Partners',
    description: 'Wholesale solutions for toy retailers and gift shops',
    icon: Briefcase,
    benefits: ['Wholesale pricing', 'Exclusive distributions', 'Marketing support', 'Dedicated account manager'],
    ctaText: 'Become a Retail Partner',
  },
  {
    title: 'International Orders',
    description: 'Global shipping and partnerships for international buyers',
    icon: TrendingUp,
    benefits: ['Competitive pricing', 'Bulk discounts', 'Custom packaging', 'Logistics support'],
    ctaText: 'Inquire International',
  },
]

export default function BulkPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-secondary-foreground mb-4">Buy In Bulk</h1>
          <p className="text-secondary-foreground/60 max-w-2xl">
            Wholesale solutions for schools, retailers, and international buyers. Get premium wooden toys at competitive bulk pricing.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Bulk Categories */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Bulk Solutions</h2>
          <p className="text-foreground/60 mb-12">Choose the option that best fits your needs</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bulkCategories.map((category, idx) => {
              const IconComponent = category.icon
              return (
                <div key={idx} className="group bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-primary transition-all">
                  <IconComponent size={48} className="text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">{category.title}</h3>
                  <p className="text-foreground/60 mb-6">{category.description}</p>
                  <ul className="space-y-2 mb-8">
                    {category.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-start gap-2">
                        <Package size={16} className="text-accent flex-shrink-0 mt-1" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition">
                    {category.ctaText}
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Bulk Pricing Tiers</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-6 py-4 text-left text-foreground font-semibold">Quantity</th>
                  <th className="px-6 py-4 text-left text-foreground font-semibold">Discount</th>
                  <th className="px-6 py-4 text-left text-foreground font-semibold">Price Per Unit</th>
                  <th className="px-6 py-4 text-left text-foreground font-semibold">Example Savings</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { quantity: '10-25 units', discount: '15%', price: '₹425-₹590', savings: 'Up to ₹3,750' },
                  { quantity: '26-50 units', discount: '20%', price: '₹400-₹560', savings: 'Up to ₹10,000' },
                  { quantity: '51-100 units', discount: '25%', price: '₹375-₹540', savings: 'Up to ₹25,000' },
                  { quantity: '100+ units', discount: '30%+', price: 'Custom Quote', savings: 'Contact us' },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-background' : 'bg-secondary/30'}>
                    <td className="px-6 py-4 text-foreground font-semibold">{row.quantity}</td>
                    <td className="px-6 py-4 text-accent font-bold">{row.discount}</td>
                    <td className="px-6 py-4 text-foreground">{row.price}</td>
                    <td className="px-6 py-4 text-primary font-semibold">{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* WhyGobi */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Why Choose Gobi for Bulk Orders?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Certified Quality',
                description: 'All products meet international safety standards. Eco-friendly materials sourced responsibly.',
              },
              {
                title: 'Expert Support',
                description: 'Dedicated account managers to help with order customization and logistics planning.',
              },
              {
                title: 'Flexible Payment',
                description: 'Customized payment terms available for bulk orders. Net 30/60/90 options for B2B buyers.',
              },
              {
                title: 'Fast Delivery',
                description: 'Efficient order processing and shipping. Track your bulk orders in real-time.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-secondary rounded-lg p-8 border border-border hover:border-primary transition-all">
                <h3 className="text-xl font-bold text-secondary-foreground mb-3">{item.title}</h3>
                <p className="text-secondary-foreground/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary rounded-lg p-12 text-primary-foreground text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Place a Bulk Order?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our bulk sales team for a custom quote. We'll help you find the perfect solution for your needs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-primary-foreground/90 transition">
              Get a Quote
            </button>
            <a href="mailto:bulk@arirotoys.com" className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg font-medium hover:bg-primary-foreground/10 transition">
              Email: bulk@arirotoys.com
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
