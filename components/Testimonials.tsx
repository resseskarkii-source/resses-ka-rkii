'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Aarati Sharma',
    role: 'Local Guide',
    content: 'Best café atmosphere in Kathmandu! The coffee is always perfectly brewed and the staff is incredibly welcoming.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sushant Shrestha',
    role: 'Coffee Enthusiast',
    content: 'Amazing coffee and aesthetic interior. Their Cappuccino with the cheesecake is a match made in heaven. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priyanka Thapa',
    role: 'Remote Worker',
    content: 'Perfect place for work and relaxation. Great Wi-Fi, comfortable seating, and the cold brew keeps me going all day.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-[#0c0a09] relative border-t border-b border-white/5">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-[#d4af37] mb-4"
          >
            Customer Stories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#f5f2ed]/80 max-w-2xl mx-auto font-light text-lg"
          >
            Don't just take our word for it. Here's what our community has to say.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-8 relative"
            >
              <div className="flex text-[#d4af37] mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-[#f5f2ed]/90 font-light italic mb-8 h-24">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#d4af37]/30">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-[#d4af37]">{review.name}</h4>
                  <span className="text-[10px] text-[#f5f2ed]/60 uppercase tracking-widest">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
