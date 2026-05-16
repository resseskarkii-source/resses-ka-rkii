'use client';

import { CartProvider } from './CartProvider';
import { CartDrawer } from './CartDrawer';
import { Navbar } from './Navbar';
import { ReactNode } from 'react';

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <CartDrawer />
    </CartProvider>
  );
}
