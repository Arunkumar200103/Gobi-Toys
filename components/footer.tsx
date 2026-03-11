import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Gobi Toys</h3>
            <p className="text-sm opacity-80">
              India's No.1 Montessori Toy Brand. Premium wooden toys for your child's development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="opacity-80 hover:opacity-100 transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-80 hover:opacity-100 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="opacity-80 hover:opacity-100 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold mb-4">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="opacity-80">© 2026 Gobi Toys. All rights reserved.</p>
          <p className="opacity-80">Made with care for your little ones</p>
        </div>
      </div>
    </footer>
  )
}
