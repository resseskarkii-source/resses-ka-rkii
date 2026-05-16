'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from './CartProvider';
import { Plus } from 'lucide-react';

const categories = ['Coffee', 'Bakery', 'Fast Food', 'Nepali Food', 'Drinks'];

type MenuItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  bestseller?: boolean;
};

const menuData: Record<string, MenuItem[]> = {
  'Coffee': [
    { id: 'c1', name: 'Espresso', price: 180, image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop&q=80', description: 'Strong, intense coffee shot.' },
    { id: 'c2', name: 'Americano', price: 220, image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=800&auto=format&fit=crop&q=80', description: 'Espresso with hot water.' },
    { id: 'c3', name: 'Cappuccino', price: 280, image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&auto=format&fit=crop&q=80', description: 'Espresso, steamed milk, deep foam.', bestseller: true },
    { id: 'c4', name: 'Latte', price: 300, image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=80', description: 'Velvety smooth milk and espresso.' },
    { id: 'c5', name: 'Mocha', price: 320, image: 'https://images.unsplash.com/photo-1529892485635-2f50d995cbfd?w=800&auto=format&fit=crop&q=80', description: 'Chocolate flavored coffee variant.' },
    { id: 'c6', name: 'Cold Brew', price: 350, image: 'https://images.unsplash.com/photo-1461023058943-0708e5e23659?w=800&auto=format&fit=crop&q=80', description: '24-hour steeped cold coffee.' },
    { id: 'c7', name: 'Caramel Macchiato', price: 380, image: 'https://images.unsplash.com/photo-1485600299623-690a4242795c?w=800&auto=format&fit=crop&q=80', description: 'Vanilla, espresso, caramel drizzle.', bestseller: true },
    { id: 'c8', name: 'Iced Coffee', price: 300, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&auto=format&fit=crop&q=80', description: 'Refreshing brewed ice coffee.' },
  ],
  'Bakery': [
    { id: 'b1', name: 'Chocolate Cake', price: 250, image: 'https://images.unsplash.com/photo-1578985545062-69928b1ea6cb?w=800&auto=format&fit=crop&q=80', description: 'Rich, moist chocolate layer piece.', bestseller: true },
    { id: 'b2', name: 'Cheesecake', price: 320, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&auto=format&fit=crop&q=80', description: 'Classic New York style with berry compote.' },
    { id: 'b3', name: 'Brownie', price: 180, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=80', description: 'Fudgy and double chocolate.' },
    { id: 'b4', name: 'Muffin', price: 150, image: 'https://images.unsplash.com/photo-1558401391-7290af1eb64e?w=800&auto=format&fit=crop&q=80', description: 'Blueberry filled soft muffin.' },
    { id: 'b5', name: 'Croissant', price: 220, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80', description: 'Buttery, flaky, fresh baked.', bestseller: true },
    { id: 'b6', name: 'Donut', price: 120, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&auto=format&fit=crop&q=80', description: 'Glazed ring of happiness.' },
  ],
  'Fast Food': [
    { id: 'f1', name: 'Chicken Burger', price: 350, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80', description: 'Crispy patty, fresh lettuce and mayo.', bestseller: true },
    { id: 'f2', name: 'Veg Burger', price: 280, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80', description: 'Mixed veg patty with special sauce.' },
    { id: 'f3', name: 'French Fries', price: 200, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop&q=80', description: 'Crispy salted potato fries.' },
    { id: 'f4', name: 'Chicken Pizza', price: 650, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80', description: 'Wood-fired loaded chicken pizza.' },
    { id: 'f5', name: 'Veg Pizza', price: 550, image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop&q=80', description: 'Fresh vegetables and mozzarella.' },
    { id: 'f6', name: 'Club Sandwich', price: 300, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&auto=format&fit=crop&q=80', description: 'Three layered hearty sandwich.' },
  ],
  'Nepali Food': [
    { id: 'n1', name: 'Chicken Mo:Mo', price: 250, image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=800&auto=format&fit=crop&q=80', description: 'Steamed dumplings with spicy achaar.', bestseller: true },
    { id: 'n2', name: 'Veg Mo:Mo', price: 220, image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&auto=format&fit=crop&q=80', description: 'Fresh vegetable stuffed dumplings.' },
    { id: 'n3', name: 'Chowmein', price: 220, image: 'https://images.unsplash.com/photo-1626804475297-41609ea0aa4b?w=800&auto=format&fit=crop&q=80', description: 'Wok-tossed noodles with veggies.' },
    { id: 'n4', name: 'Thukpa', price: 280, image: 'https://images.unsplash.com/photo-1548247656-11116670498b?w=800&auto=format&fit=crop&q=80', description: 'Hot noodle soup across the Himalayas.' },
    { id: 'n5', name: 'Sel Roti Set', price: 180, image: 'https://images.unsplash.com/photo-1616453664035-715bd05ff060?w=800&auto=format&fit=crop&q=80', description: 'Traditional sweet ring with aloo dum.' },
    { id: 'n6', name: 'Newari Khaja Set', price: 450, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80', description: 'Authentic sampler of Newari flavors.', bestseller: true },
  ],
  'Drinks': [
    { id: 'd1', name: 'Oreo Shake', price: 320, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&auto=format&fit=crop&q=80', description: 'Thick shake blended with Oreos.' },
    { id: 'd2', name: 'Chocolate Shake', price: 350, image: 'https://images.unsplash.com/photo-1553177595-4de2bb0842b9?w=800&auto=format&fit=crop&q=80', description: 'Rich chocolate milkshake.' },
    { id: 'd3', name: 'Fresh Juice', price: 250, image: 'https://images.unsplash.com/photo-1613478881439-ce471d871cc1?w=800&auto=format&fit=crop&q=80', description: 'Seasonal mixed fresh fruits juice.' },
    { id: 'd4', name: 'Lemon Soda', price: 180, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80', description: 'Refreshing sparkling lemon drink.' },
    { id: 'd5', name: 'Mineral Water', price: 50, image: 'https://images.unsplash.com/photo-1523362628745-0c14fbfa5eb8?w=800&auto=format&fit=crop&q=80', description: 'Bottled spring water.' },
  ],
};

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('Coffee');
  const { addToCart } = useCart();

  const handleDragStart = (e: any) => {
    e.preventDefault();
  };

  return (
    <section id="menu" className="py-24 bg-[#0c0a09]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-[#d4af37] mb-4"
          >
            Our Menu
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#f5f2ed]/80 max-w-2xl mx-auto font-light text-lg"
          >
            Handcrafted beverages and delicacies made with the finest ingredients.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-start md:justify-center overflow-x-auto gap-4 mb-16 pb-4 custom-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-2 transition-all duration-300 font-semibold text-xs tracking-widest uppercase ${
                activeCategory === category 
                  ? 'border-b-2 border-[#d4af37] text-[#d4af37]' 
                  : 'border-b-2 border-transparent text-[#f5f2ed]/50 hover:text-[#f5f2ed]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass overflow-hidden group hover:border-[#d4af37]/30 transition-colors shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    onDragStart={handleDragStart}
                  />
                  {item.bestseller && (
                    <div className="absolute top-4 left-4 badge bg-[#0c0a09]/80 text-[#d4af37] backdrop-blur-md">
                      BESTSELLER
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/90 to-transparent opacity-90" />
                </div>
                
                <div className="p-6 relative -mt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium text-[#d4af37] font-serif">{item.name}</h3>
                    <span className="text-[#d4af37] font-bold">Rs. {item.price}</span>
                  </div>
                  <p className="text-[#f5f2ed]/80 text-sm mb-6 h-10 line-clamp-2">{item.description}</p>
                  
                  <button
                    onClick={() => addToCart({ ...item, quantity: 1 })}
                    className="w-full py-2 bg-white hover:bg-[#d4af37] text-black hover:text-white font-semibold text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Add to Order</span>
                    <Plus size={16} className="text-[#d4af37] group-hover/btn:text-white transition-colors" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
