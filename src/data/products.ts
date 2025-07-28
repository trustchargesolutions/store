import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 12999, // $129.99 in cents
    image: 'https://i.imgur.com/goY5yVJ.jpeg',
    category: 'Stickers',
    stock: 10
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health monitoring',
    price: 29999, // $299.99 in cents
    image: 'https://i.imgur.com/SbUBOq6.jpeg',
    category: 'Stickers',
    stock: 5
  },
  {
    id: '3',
    name: 'Coffee Mug',
    description: 'Premium ceramic coffee mug for your morning brew',
    price: 1999, // $19.99 in cents
    image: 'https://i.imgur.com/3Wzsq82.jpeg',
    category: 'Stickers',
    stock: 20
  },
  {
    id: '4',
    name: 'Laptop Stand',
    description: 'Ergonomic laptop stand for better posture',
    price: 4999, // $49.99 in cents
    image: 'https://i.imgur.com/cCrV4ID.jpeg',
    category: 'Stickers',
    stock: 15
  },
  {
    id: '5',
    name: 'Wireless Mouse',
    description: 'Precision wireless mouse for productivity',
    price: 3999, // $39.99 in cents
    image: 'https://i.imgur.com/vStHACV.jpeg',
    category: 'Stickers',
    stock: 12
  },
  {
    id: '6',
    name: 'Premium Vinyl Sticker Decals',
    description: '',
    price: 999, // Base price in cents (will be overridden by variants)
    image: 'https://i.imgur.com/vKUweSS.jpeg',
    category: 'Stickers',
    stock: 100,
    isVariable: true,
    allowsCustomization: true,
    variants: [
      {
        id: 'pack-5',
        name: '',
        price: 6000, // $9.99
        quantity: 5,
        description: 'Perfect starter pack'
      },
      {
        id: 'pack-10',
        name: '',
        price: 7000, // $17.99 (10% discount)
        quantity: 10,
        description: 'Most popular choice'
      },
      {
        id: 'pack-25',
        name: '',
        price: 8000, // $39.99 (20% discount)
        quantity: 25,
        description: 'Best value for sharing'
      },
      {
        id: 'pack-50',
        name: '',
        price: 16000, // $69.99 (30% discount)
        quantity: 50,
        description: 'Bulk pack for businesses'
      }
    ]
  }
];