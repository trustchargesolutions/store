'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product, CartItem, Cart, ProductVariant } from '@/types';

interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, quantity?: number, variant?: ProductVariant, customText?: string) => void;
  removeFromCart: (productId: string, variantId?: string, customText?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantId?: string, customText?: string) => void;
  clearCart: () => void;
  getCartItemsCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartAction =
  | { type: 'ADD_TO_CART'; product: Product; quantity: number; variant?: ProductVariant; customText?: string }
  | { type: 'REMOVE_FROM_CART'; productId: string; variantId?: string; customText?: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number; variantId?: string; customText?: string }
  | { type: 'CLEAR_CART' };

// Helper function to create a unique key for cart items
const getCartItemKey = (productId: string, variantId?: string) => {
  return variantId ? `${productId}_${variantId}` : productId;
};

// Helper function to check if two cart items match
const cartItemsMatch = (item: CartItem, productId: string, variantId?: string, customText?: string) => {
  return item.product.id === productId && 
         item.selectedVariant?.id === variantId && 
         item.customText === customText;
};

const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.items.findIndex(item =>
        cartItemsMatch(item, action.product.id, action.variant?.id, action.customText)
      );

      let newItems: CartItem[];
      
      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.quantity }
            : item
        );
      } else {
        const newItem: CartItem = {
          product: action.product,
          quantity: action.quantity,
          selectedVariant: action.variant,
          customText: action.customText
        };
        newItems = [...state.items, newItem];
      }

      const total = newItems.reduce((sum, item) => {
        const price = item.selectedVariant ? item.selectedVariant.price : item.product.price;
        return sum + price * item.quantity;
      }, 0);

      return { items: newItems, total };
    }

    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item =>
        !cartItemsMatch(item, action.productId, action.variantId, action.customText)
      );
      
      const total = newItems.reduce((sum, item) => {
        const price = item.selectedVariant ? item.selectedVariant.price : item.product.price;
        return sum + price * item.quantity;
      }, 0);
      
      return { items: newItems, total };
    }

    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        return cartReducer(state, { 
          type: 'REMOVE_FROM_CART', 
          productId: action.productId, 
          variantId: action.variantId,
          customText: action.customText
        });
      }

      const newItems = state.items.map(item =>
        cartItemsMatch(item, action.productId, action.variantId, action.customText)
          ? { ...item, quantity: action.quantity }
          : item
      );

      const total = newItems.reduce((sum, item) => {
        const price = item.selectedVariant ? item.selectedVariant.price : item.product.price;
        return sum + price * item.quantity;
      }, 0);

      return { items: newItems, total };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0 };

    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  const addToCart = (product: Product, quantity = 1, variant?: ProductVariant, customText?: string) => {
    dispatch({ type: 'ADD_TO_CART', product, quantity, variant, customText });
  };

  const removeFromCart = (productId: string, variantId?: string, customText?: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId, variantId, customText });
  };

  const updateQuantity = (productId: string, quantity: number, variantId?: string, customText?: string) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity, variantId, customText });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getCartItemsCount = () => {
    return cart.items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};