'use client';

import { useCart } from './CartProvider';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, total } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md glass z-50 p-6 flex flex-col shadow-2xl border-l border-[#d4af37]/20"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-serif text-[#d4af37]">Your Order</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-[#f5f2ed]/70 hover:text-[#d4af37] transition-colors rounded-full hover:bg-black/20"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-[#f5f2ed]/50 space-y-4">
                  <ShoppingBag size={48} className="opacity-20" />
                  <p>Your cart is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-2 border border-white/30 text-white hover:bg-white/10 rounded-none transition-colors uppercase tracking-widest text-sm"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 bg-black/40 p-4 border border-[#d4af37]/10">
                    <div className="flex-1">
                      <h3 className="font-medium text-[#f5f2ed]">{item.name}</h3>
                      <p className="text-[#d4af37] font-medium">Rs. {item.price}</p>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-[#0c0a09]/50 px-2 py-1 border border-white/10">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-[#f5f2ed]/70 hover:text-[#d4af37] transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-4 text-center font-medium text-sm text-[#f5f2ed]">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-[#f5f2ed]/70 hover:text-[#d4af37] transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="mt-8 space-y-6 pt-6 border-t border-white/10">
                <div className="space-y-3">
                  <div className="flex justify-between text-[#f5f2ed]/70 text-sm">
                    <span>Subtotal</span>
                    <span>Rs. {total}</span>
                  </div>
                  <div className="flex justify-between text-[#f5f2ed]/70 text-sm">
                    <span>Delivery Fee (Kathmandu)</span>
                    <span>Rs. 100</span>
                  </div>
                  <div className="flex justify-between text-xl font-serif text-[#d4af37] pt-2 border-t border-white/5">
                    <span>Total</span>
                    <span>Rs. {total + 100}</span>
                  </div>
                </div>
                
                <button 
                  className="w-full py-4 bg-white hover:bg-[#d4af37] text-black hover:text-white font-semibold text-sm uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                  onClick={() => alert("Checkout flow to be implemented with eSewa/Khalti/COD")}
                >
                  Proceed to Checkout <ShoppingBag size={20} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
