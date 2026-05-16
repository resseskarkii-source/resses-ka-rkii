'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0c0a09] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 lg:col-span-1">
            <Link href="#home" className="text-2xl font-serif font-bold text-[#d4af37] tracking-wider block">
              HIMALAYAN<br/><span className="text-sm tracking-widest text-[#f5f2ed] block -mt-1 font-sans font-light">BREW CAFE</span>
            </Link>
            <p className="text-[#f5f2ed]/50 text-sm leading-relaxed">
              Experience the finest coffee culture in Nepal. Crafted coffee, cozy moments, and a community built around exceptional taste.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#f5f2ed] hover:border-[#d4af37] hover:text-[#d4af37] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#f5f2ed] hover:border-[#d4af37] hover:text-[#d4af37] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#f5f2ed] hover:border-[#d4af37] hover:text-[#d4af37] transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#f5f2ed] font-serif font-medium mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm text-[#f5f2ed]/60">
              <li><Link href="#home" className="hover:text-[#d4af37] transition-colors">Home</Link></li>
              <li><Link href="#menu" className="hover:text-[#d4af37] transition-colors">Our Menu</Link></li>
              <li><Link href="#gallery" className="hover:text-[#d4af37] transition-colors">Gallery</Link></li>
              <li><Link href="#reviews" className="hover:text-[#d4af37] transition-colors">Reviews</Link></li>
              <li><Link href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f5f2ed] font-serif font-medium mb-6 text-lg">Payment Methods</h4>
            <ul className="space-y-4 text-sm text-[#f5f2ed]/60">
              <li>eSewa</li>
              <li>Khalti</li>
              <li>Cash on Delivery</li>
              <li>Debit / Credit Cards</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f5f2ed] font-serif font-medium mb-6 text-lg">Newsletter</h4>
            <p className="text-[#f5f2ed]/50 text-sm mb-4">Subscribe for updates and exclusive offers.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed!') }} className="flex">
              <input type="email" required placeholder="Email Address" className="w-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-[#f5f2ed] focus:outline-none focus:border-[#d4af37]" />
              <button type="submit" className="bg-white text-black px-4 py-2 font-semibold hover:bg-[#d4af37] hover:text-white transition-colors text-sm uppercase tracking-widest">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#f5f2ed]/40">
          <p>&copy; {new Date().getFullYear()} Himalayan Brew Café. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#f5f2ed] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#f5f2ed] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
