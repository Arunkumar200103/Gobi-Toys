import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Check, Heart, Award, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-secondary-foreground mb-6">
            About Gobi Toys
          </h1>
          <p className="text-2xl text-secondary-foreground/80 max-w-3xl">
            India's No.1 Montessori Toy Brand. We believe in creating premium wooden toys that nurture your child's natural development.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                We are committed to providing high-quality, safe, and engaging wooden toys that support your child's growth and development according to Montessori principles.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Every toy is carefully crafted with premium materials and undergoes rigorous safety testing to ensure the best for your little ones.
              </p>
              <div className="space-y-3">
                {[
                  'Premium quality materials',
                  '100% safety tested',
                  'Eco-friendly & sustainable',
                  'Backed by child development experts',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={24} className="text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-secondary rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-secondary-foreground">
                <Heart size={80} className="mx-auto mb-4 text-primary opacity-50" />
                <p className="text-lg font-semibold">Crafted with Love</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why ChooseGobi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Award Winning',
                description: 'Recognized for excellence in toy design and safety',
              },
              {
                icon: Users,
                title: 'Trusted by Parents',
                description: '50,000+ happy families across India',
              },
              {
                icon: Check,
                title: 'Certified Safe',
                description: 'CE, CPSIA, and ISO certifications',
              },
              {
                icon: Heart,
                title: 'Child Development',
                description: 'Designed with child psychologists',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-secondary rounded-full">
                      <Icon size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/60">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
             Gobi was founded with a simple mission: to create toys that help children discover the world around them while ensuring their safety and well-being. We started as a small workshop and have grown into India's leading Montessori toy brand.
            </p>
            <p>
              Every product in our collection is designed with careful consideration of child development principles. We work closely with educators, child psychologists, and parents to understand what children need at each stage of their growth.
            </p>
            <p>
              Our commitment to quality is unwavering. We source premium sustainable wood, use non-toxic finishes, and subject every toy to rigorous safety testing. When you chooseGobi, you're choosing toys that combine joy with safety.
            </p>
            <p>
              Today, we're proud to serve over 50,000 families across India, each one trusting us with their child's development and happiness. Thank you for being part of theGobi family!
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-secondary-foreground mb-12 text-center">Certifications & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'CE Certified', description: 'European safety standards compliance' },
              { name: 'CPSIA Compliant', description: 'US consumer product safety standards' },
              { name: 'ISO 8124', description: 'International toy safety standards' },
            ].map((cert, i) => (
              <div key={i} className="bg-card p-8 rounded-lg border border-border text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">{cert.name}</h3>
                <p className="text-foreground/60">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Join the Gobi Family</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover our complete collection of premium wooden toys and give your child the gift of safe, engaging play.
          </p>
          <a href="/shop" className="inline-block px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:opacity-90 transition">
            Shop Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
