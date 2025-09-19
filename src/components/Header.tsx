'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Cart from './Cart';

export default function Header() {
  const { getCartItemsCount } = useCart();
  const cartItemsCount = getCartItemsCount();

  return (
    <>
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  GrafixMood.co.uk
                </h1>
                <p className="text-sm text-gray-600 hidden sm:block">
                  Drive your style. Stick with quality.
                </p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </Link>
              <Link href="/returns-refunds" className="text-gray-700 hover:text-gray-900">
                Returns
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Cart cartItemsCount={cartItemsCount} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}