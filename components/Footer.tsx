import Link from 'next/link'
import { Shield, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">K</span>
              </div>
              <span className="text-xl font-heading font-bold text-white">Kintaraa</span>
            </div>
            <p className="text-neutral-mid font-body mb-4 max-w-md">
              Empowering GBV survivors through connected care. Connecting survivors with specialized service providers for comprehensive, coordinated support.
            </p>
            <div className="flex items-center space-x-2 text-sm text-neutral-mid font-body">
              <Shield size={16} />
              <span>Your privacy and safety are our top priorities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-4">Support</h3>
            <ul className="space-y-2 font-body">
              <li>
                <a
                  href="mailto:support@kintaraa.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <span className="text-neutral-mid/60">Crisis Hotline</span>
              </li>
              <li>
                <span className="text-neutral-mid/60">Resources</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-mid/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-mid font-body">
              © {currentYear} Kintaraa. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-neutral-mid font-body">
              <span>Made with</span>
              <Heart size={14} className="text-primary-pink fill-primary-pink" />
              <span>for survivors</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
