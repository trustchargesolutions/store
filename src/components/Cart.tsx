'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { stripePromise } from '@/lib/stripe';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react';

interface CartProps {
  cartItemsCount: number;
}

export default function Cart({ cartItemsCount }: CartProps) {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart.items.map(item => ({
            productId: item.product.id,
            quantity: item.quantity,
            variantId: item.selectedVariant?.id,
            customText: item.customText,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create checkout session');
      }

      const { sessionId } = await response.json();
      
      if (!sessionId) {
        throw new Error('No session ID received from checkout API');
      }
      
      const stripe = await stripePromise;
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.error('Stripe checkout error:', error);
          alert('There was an error redirecting to checkout. Please try again.');
        }
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error processing your checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getItemPrice = (item: any) => {
    return item.selectedVariant ? item.selectedVariant.price : item.product.price;
  };

  const getItemDisplayName = (item: any) => {
    let name;
    
    // Use custom text as the product name if present
    if (item.customText) {
      name = item.customText;
    } else {
      name = item.product.name;
    }
    
    // Add variant name if present and it has a name
    if (item.selectedVariant && item.selectedVariant.name) {
      name += ` - ${item.selectedVariant.name}`;
    }
    
    return name;
  };

  const getItemKey = (item: any) => {
    let key = item.product.id;
    if (item.selectedVariant) {
      key += `_${item.selectedVariant.id}`;
    }
    if (item.customText) {
      key += `_${item.customText}`;
    }
    return key;
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-6 w-6" />
          {cartItemsCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItemsCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-[400px] sm:w-[440px] flex flex-col">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            {cart.items.length === 0 
              ? "Your cart is empty" 
              : `${cartItemsCount} item${cartItemsCount !== 1 ? 's' : ''} in your cart`
            }
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {cart.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <p className="text-sm text-gray-400 mt-2">Add some products to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.items.map((item, index) => (
                <div key={getItemKey(item)}>
                  <div className="flex gap-4">
                    <div className="relative w-16 h-16 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm text-gray-900 line-clamp-2">
                        {getItemDisplayName(item)}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {formatPrice(getItemPrice(item))}
                        {item.selectedVariant && (
                          <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {item.selectedVariant.quantity} pack
                          </span>
                        )}
                      </p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(
                              item.product.id, 
                              item.quantity - 1, 
                              item.selectedVariant?.id,
                              item.customText
                            )}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          
                          <span className="text-sm font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(
                              item.product.id, 
                              item.quantity + 1, 
                              item.selectedVariant?.id,
                              item.customText
                            )}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => removeFromCart(item.product.id, item.selectedVariant?.id, item.customText)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {index < cart.items.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.items.length > 0 && (
          <div className="border-t pt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-base font-medium">Total</span>
              <span className="text-lg font-bold">{formatPrice(cart.total)}</span>
            </div>
            
            <div className="space-y-2">
              <Button 
                onClick={handleCheckout}
                disabled={isLoading}
                className="w-full"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  'Checkout'
                )}
              </Button>
              
              <Button
                variant="outline"
                onClick={clearCart}
                className="w-full"
                size="sm"
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}