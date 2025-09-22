import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GrafixMood.com | Premium Car Stickers & Auto Accessories – UK Delivery',
  description: 'GrafixMood.com is your UK destination for premium car stickers and custom auto accessories. Bold designs. Fast delivery. Easy online shopping.',
  keywords: 'car stickers, auto accessories, vehicle decals, car graphics, UK, GrafixMood, automotive, car styling, custom accessories',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}