'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product, ProductVariant } from '@/types';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import ProductDetailsDialog from './ProductDetailsDialog';
import { Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.isVariable && product.variants ? product.variants[0] : null
  );
  const [customText, setCustomText] = useState<string>('');
  const [showDetailsDialog, setShowDetailsDialog] = useState<boolean>(false);

  const handleAddToCart = () => {
    if (product.isVariable && selectedVariant) {
      addToCart(product, 1, selectedVariant, customText.trim() || undefined);
    } else {
      addToCart(product, 1, undefined, customText.trim() || undefined);
    }
  };

  const getDisplayPrice = () => {
    if (product.isVariable && selectedVariant) {
      return selectedVariant.price;
    }
    return product.price;
  };

  const getQuantityInfo = () => {
    if (product.isVariable && selectedVariant) {
      return `${selectedVariant.quantity} stickers`;
    }
    return null;
  };


  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-72 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {product.name}
          </h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Custom Text Input for Customizable Products */}
        {product.allowsCustomization && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name:
            </label>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="Enter custom text"
              className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                customText.trim() ? 'border-gray-300' : 'border-red-300 bg-red-50'
              }`}
              maxLength={50}
            />
            <p className={`text-xs mt-1 ${customText.trim() ? 'text-gray-500' : 'text-red-500'}`}>
              Product name: {customText.trim() || 'Required - please enter a name'}
            </p>
          </div>
        )}

        {/* Variant Selection for Variable Products */}
        {product.isVariable && product.variants && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pack Size:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`p-2 text-xs border rounded-md transition-colors ${
                    selectedVariant?.id === variant.id
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="font-medium">{variant.name}</div>
                  <div className="text-gray-600">{formatPrice(variant.price)}</div>
                </button>
              ))}
            </div>
            {selectedVariant?.description && (
              <p className="text-xs text-gray-500 mt-2">{selectedVariant.description}</p>
            )}
          </div>
        )}

        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(getDisplayPrice())}
            </span>
            {getQuantityInfo() && (
              <p className="text-sm text-gray-600">{getQuantityInfo()}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              Stock: {product.stock}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setShowDetailsDialog(true)}
            className="flex-1 px-3 py-2 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-1"
          >
            <Eye className="w-4 h-4" />
            View Details
          </button>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0 || (product.allowsCustomization && !customText.trim())}
            className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              product.stock > 0 && (!product.allowsCustomization || customText.trim())
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {product.stock === 0 
              ? 'Out of Stock' 
              : (product.allowsCustomization && !customText.trim())
                ? 'Enter Product Name'
                : 'Add to Cart'
            }
          </button>
        </div>
      </div>

      {/* Product Details Dialog */}
      <ProductDetailsDialog
        product={product}
        isOpen={showDetailsDialog}
        onClose={() => setShowDetailsDialog(false)}
      />
    </div>
  );
}