'use client';

import { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from './CartProvider';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

export function Navbar() {
  const { items, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-[#0c0a09]/90 backdrop-blur-md shadow-lg py-4 border-b border-white/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="#home" className="text-2xl font-serif font-bold text-[#d4af37] tracking-wider z-50">
            HIMALAYAN<br/><span className="text-sm tracking-widest text-[#f5f2ed] block -mt-1 font-sans font-light">BREW CAFE</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm uppercase tracking-widest text-[#f5f2ed]/60 hover:text-[#f5f2ed] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 z-50">
            <button 
              className="relative p-2 text-[#f5f2ed] hover:text-[#d4af37] transition-colors group"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={24} />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 bg-[#d4af37] text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            
            <button 
              className="md:hidden p-2 text-[#f5f2ed]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#0c0a09] pt-28 px-6 pb-6 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-[#f5f2ed] hover:text-[#d4af37] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-[#d4af37] font-serif italic mb-4">"Crafted Coffee, Cozy Moments"</p>
                <div className="flex justify-center gap-4">
                  <Link href="#contact" className="px-6 py-3 bg-white text-black hover:bg-[#d4af37] hover:text-white font-medium text-sm tracking-widest uppercase transition-all">
                    Reserve Table
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
