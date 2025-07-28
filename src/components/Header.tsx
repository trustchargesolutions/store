'use client';

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
              <h1 className="text-2xl font-bold text-gray-900">
                Grafix Mood Store
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Products
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                About
              </a>
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