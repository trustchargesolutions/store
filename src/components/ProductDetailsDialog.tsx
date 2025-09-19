'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product, ProductVariant } from '@/types';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  X, 
  ShoppingCart, 
  Package, 
  Truck, 
  Shield, 
  Star, 
  Plus, 
  Minus, 
  Ruler, 
  Palette, 
  Layers,
  Settings,
  CheckCircle,
  ZoomIn
} from 'lucide-react';

interface ProductDetailsDialogProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailsDialog({ product, isOpen, onClose }: ProductDetailsDialogProps) {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.isVariable && product.variants ? product.variants[0] : null
  );
  const [customText, setCustomText] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      if (product.isVariable && selectedVariant) {
        addToCart(product, quantity, selectedVariant, customText.trim() || undefined);
      } else {
        addToCart(product, quantity, undefined, customText.trim() || undefined);
      }
      // Small delay for better UX feedback
      await new Promise(resolve => setTimeout(resolve, 300));
      onClose();
    } finally {
      setIsLoading(false);
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

  const getSpecificationIcon = (key: string) => {
    switch (key) {
      case 'material': return <Layers className="w-4 h-4" />;
      case 'size': return <Ruler className="w-4 h-4" />;
      case 'color': return <Palette className="w-4 h-4" />;
      case 'designStyle': return <Star className="w-4 h-4" />;
      default: return <Settings className="w-4 h-4" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-[95vw] sm:max-w-4xl lg:max-w-6xl h-[95vh] max-h-[95vh] p-0 gap-0 flex flex-col">
        <DialogHeader className="sr-only">
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        
        {/* Mobile-first Header */}
        <div className="sticky top-0 z-10 bg-white border-b px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <Badge variant="outline" className="text-xs font-medium">
              {product.category}
            </Badge>
            <Badge variant={product.stock > 0 ? "default" : "destructive"} className="text-xs">
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 hover:bg-gray-100 flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-full">
            {/* Product Image Section - Mobile First */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8 flex flex-col min-h-[300px] lg:min-h-[600px]">
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-lg group">
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                      <Package className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
                    </div>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-cover transition-all duration-300 group-hover:scale-105 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ZoomIn className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Key Features */}
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                <Badge variant="secondary" className="flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-white/80 backdrop-blur-sm text-xs">
                  <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Waterproof
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-white/80 backdrop-blur-sm text-xs">
                  <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Premium Quality
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-white/80 backdrop-blur-sm text-xs">
                  <Truck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Fast Delivery
                </Badge>
              </div>
            </div>

            {/* Product Details Section - Mobile Optimized */}
            <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
              {/* Product Title and Price */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  {product.name}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-bold text-blue-600">
                    {formatPrice(getDisplayPrice())}
                  </span>
                  {getQuantityInfo() && (
                    <span className="text-base sm:text-lg text-gray-500">/ {getQuantityInfo()}</span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {product.detailedDescription || product.description}
                </p>
              </div>

              {/* Specifications */}
              {product.specifications && (
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
                    Specifications
                  </h3>
                  <div className="grid gap-2 sm:gap-3">
                    {Object.entries(product.specifications).map(([key, value]) => {
                      if (!value || (Array.isArray(value) && value.length === 0)) return null;
                      
                      if (key === 'features' && Array.isArray(value)) {
                        return (
                          <div key={key} className="space-y-2">
                            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-600">
                              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                              Features
                            </div>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 ml-5 sm:ml-6">
                              {value.map((feature, index) => (
                                <Badge key={index} variant="outline" className="text-xs font-normal">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div key={key} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 sm:py-3 border-b border-gray-100 last:border-b-0 gap-1 sm:gap-2">
                          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-600 capitalize">
                            {getSpecificationIcon(key)}
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </div>
                          <span className="text-xs sm:text-sm text-gray-900 font-medium break-words">{value as string}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Custom Text Input */}
              {product.allowsCustomization && (
                <div className="space-y-2 sm:space-y-3">
                  <label className="text-sm font-medium text-gray-900">
                    Custom Product Name *
                  </label>
                  <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Enter your custom text here..."
                    className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      customText.trim() 
                        ? 'border-gray-300 focus:border-blue-500' 
                        : 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500'
                    }`}
                    maxLength={50}
                  />
                  <p className={`text-xs ${customText.trim() ? 'text-gray-500' : 'text-red-500'}`}>
                    {customText.trim() 
                      ? `${50 - customText.length} characters remaining` 
                      : 'Custom text is required for this product'
                    }
                  </p>
                </div>
              )}

              {/* Variant Selection */}
              {product.isVariable && product.variants && (
                <div className="space-y-3 sm:space-y-4">
                  <label className="text-sm font-medium text-gray-900">
                    Choose Pack Size
                  </label>
                  <div className="grid gap-2 sm:gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant)}
                        className={`p-3 sm:p-4 text-left border-2 rounded-lg transition-all duration-200 ${
                          selectedVariant?.id === variant.id
                            ? 'border-blue-500 bg-blue-50 shadow-md'
                            : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <div className="space-y-1">
                            <div className="font-semibold text-gray-900 text-sm sm:text-base">{variant.name}</div>
                            {variant.description && (
                              <div className="text-xs sm:text-sm text-gray-600">{variant.description}</div>
                            )}
                          </div>
                          <div className="flex items-center justify-between sm:justify-end sm:text-right">
                            <div className="text-lg sm:text-xl font-bold text-blue-600">
                              {formatPrice(variant.price)}
                            </div>
                            {selectedVariant?.id === variant.id && (
                              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 ml-2 sm:mt-1 sm:ml-auto" />
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity and Add to Cart */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Quantity</label>
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-fit">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      <div className="w-12 h-10 sm:w-16 sm:h-12 flex items-center justify-center font-semibold text-base sm:text-lg border-x border-gray-300">
                        {quantity}
                      </div>
                      <button
                        onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                        disabled={quantity >= product.stock}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="text-sm font-medium text-gray-900">Total Price</div>
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">
                      {formatPrice(getDisplayPrice() * quantity)}
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleAddToCart}
                  disabled={
                    product.stock === 0 || 
                    (product.allowsCustomization && !customText.trim()) ||
                    isLoading
                  }
                  className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold transition-all duration-200 disabled:opacity-50"
                  size="lg"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="text-sm sm:text-base">Adding to Cart...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">
                        {product.stock === 0 
                          ? 'Out of Stock' 
                          : (product.allowsCustomization && !customText.trim())
                            ? 'Enter Product Name First'
                            : 'Add to Cart'
                        }
                      </span>
                    </div>
                  )}
                </Button>
              </div>

              {/* Shipping Info */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-blue-100">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Free UK Delivery</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Fast and secure shipping across the United Kingdom. 
                      Orders are typically dispatched within 1-2 business days.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Package className="w-3 h-3" />
                        <span>Secure Packaging</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        <span>Protected Delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
