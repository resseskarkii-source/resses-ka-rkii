'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export function Reservation() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Reservation requested! We will confirm shortly via email or phone.');
  };

  return (
    <section id="contact" className="py-24 bg-[#0c0a09]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#d4af37] mb-6">
                Reserve Your Spot
              </h2>
              <p className="text-[#f5f2ed]/80 font-light text-lg">
                Whether it's a quiet corner for deep work or a large table for friends, secure your place at Himalayan Brew Café.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 border border-[#d4af37]/30 text-[#d4af37] glass">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-[#d4af37] mb-1">Our Location</h4>
                  <p className="text-[#f5f2ed]/80 font-light">Thamel, Kathmandu<br/>Bagmati Province, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 border border-[#d4af37]/30 text-[#d4af37] glass">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-[#d4af37] mb-1">Opening Hours</h4>
                  <p className="text-[#f5f2ed]/80 font-light">Everyday: 7:00 AM - 10:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 border border-[#d4af37]/30 text-[#d4af37] glass">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-[#d4af37] mb-1">Contact Us</h4>
                  <p className="text-[#f5f2ed]/80 font-light">resseskarki@gmail.com</p>
                  <p className="text-[#f5f2ed]/80 font-light">+977-9800000000</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
              <button onClick={() => alert("WhatsApp redirect")} className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 font-semibold text-sm tracking-widest uppercase hover:bg-opacity-90 transition-opacity">
                <MessageCircle size={18} /> WhatsApp Us
              </button>
              <button onClick={() => alert("FB Messenger redirect")} className="flex items-center gap-2 bg-[#0084FF] text-white px-6 py-3 font-semibold text-sm tracking-widest uppercase hover:bg-opacity-90 transition-opacity">
                <MessageCircle size={18} /> Messenger
              </button>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 blur-3xl" />
            <h3 className="text-2xl font-serif text-[#d4af37] mb-8 relative z-10">Book a Table</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[#f5f2ed]/70 ml-1">Full Name</label>
                  <input required type="text" className="w-full bg-black/40 border border-[#d4af37]/20 px-4 py-3 text-[#f5f2ed] focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[#f5f2ed]/70 ml-1">Phone Number</label>
                  <input required type="tel" className="w-full bg-black/40 border border-[#d4af37]/20 px-4 py-3 text-[#f5f2ed] focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="+977-98..." />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[#f5f2ed]/70 ml-1">Date</label>
                  <input required type="date" className="w-full bg-black/40 border border-[#d4af37]/20 px-4 py-3 text-[#f5f2ed] focus:outline-none focus:border-[#d4af37] transition-colors" style={{ colorScheme: 'dark' }} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[#f5f2ed]/70 ml-1">Time</label>
                  <input required type="time" className="w-full bg-black/40 border border-[#d4af37]/20 px-4 py-3 text-[#f5f2ed] focus:outline-none focus:border-[#d4af37] transition-colors" style={{ colorScheme: 'dark' }} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[#f5f2ed]/70 ml-1">Number of Guests</label>
                <select required className="w-full bg-black/40 border border-[#d4af37]/20 px-4 py-3 text-[#f5f2ed] focus:outline-none focus:border-[#d4af37] transition-colors appearance-none">
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5+ People</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[#f5f2ed]/70 ml-1">Special Requests</label>
                <textarea rows={3} className="w-full bg-black/40 border border-[#d4af37]/20 px-4 py-3 text-[#f5f2ed] focus:outline-none focus:border-[#d4af37] transition-colors resize-none" placeholder="Any dietary preferences or seating requests?"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-white text-black hover:bg-[#d4af37] hover:text-white font-semibold text-sm tracking-widest uppercase transition-all mt-4">
                Confirm Reservation
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
