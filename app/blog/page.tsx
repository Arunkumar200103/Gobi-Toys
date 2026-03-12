"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { useState} from 'react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  image: string
  readTime: number
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Montessori Learning: A Guide to Child Development',
    excerpt:
      'Discover how Montessori principles can support your child\'s natural development through play and exploration.',
    author: 'Dr. Priya Sharma',
    date: 'March 5, 2024',
    category: 'Parenting',
    image: '/blog-1.jpg',
    readTime: 5,
  },
  {
    id: '2',
    title: 'Why Natural Wood Toys Are Better for Your Baby',
    excerpt:
      'Learn about the benefits of wooden toys and why they\'re the preferred choice for child development experts.',
    author: 'Amit Kumar',
    date: 'March 2, 2024',
    category: 'Product Guide',
    image: '/blog-2.jpg',
    readTime: 4,
  },
  {
    id: '3',
    title: 'Safety Standards in Toy Manufacturing',
    excerpt:
      'Understanding the certifications and safety tests that ensure your toys meet the highest standards.',
    author: 'Sarah Patel',
    date: 'February 28, 2024',
    category: 'Safety',
    image: '/blog-3.jpg',
    readTime: 6,
  },
  {
    id: '4',
    title: 'Sensory Play and Child Development',
    excerpt:
      'How sensory toys contribute to cognitive development and create lasting neural connections in children.',
    author: 'Dr. Priya Sharma',
    date: 'February 25, 2024',
    category: 'Learning',
    image: '/blog-4.jpg',
    readTime: 5,
  },
  {
    id: '5',
    title: 'Choosing the Right Toy for Each Age Group',
    excerpt:
      'A comprehensive guide to selecting age-appropriate toys that match your child\'s developmental stage.',
    author: 'Amit Kumar',
    date: 'February 22, 2024',
    category: 'Parenting',
    image: '/blog-5.jpg',
    readTime: 7,
  },
  {
    id: '6',
    title: 'Sustainability in Toy Making',
    excerpt:
      'HowGobi is committed to eco-friendly practices in manufacturing premium wooden toys.',
    author: 'Sarah Patel',
    date: 'February 20, 2024',
    category: 'Sustainability',
    image: '/blog-6.jpg',
    readTime: 4,
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1)
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    if (!email) return
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-secondary-foreground mb-4">Blog</h1>
          <p className="text-secondary-foreground/60">Tips, insights, and stories about child development and play</p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-secondary rounded-lg h-80 flex items-center justify-center">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                width={500}
                height={400}
                className="w-full h-full object-cover rounded-lg"
                loading="eager"
                priority
              />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-4">
                {featuredPost.category}
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <div className="flex items-center gap-4 mb-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{featuredPost.date}</span>
                </div>
                <span>{featuredPost.readTime} min read</span>
              </div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition">
                Read Article <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-foreground mb-12">Recent Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all">
                <div className="bg-secondary h-48 flex items-center justify-center">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-secondary text-foreground text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 hover:text-primary transition">
                    {post.title}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{post.readTime} min</span>
                  </div>
                  <a href="#" className="mt-4 inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition text-sm">
                    Read More <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Subscribe to Our Blog</h2>
          <p className="text-base sm:text-lg mb-8 opacity-90">
           get the latest insights, tips, and updates on child development and play delivered straight to your inbox.
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
