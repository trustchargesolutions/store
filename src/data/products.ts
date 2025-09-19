import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: '2pcs Bee Rear End Car Stickers',
    description: 'Car Vinyl Stickers Waterproof Anti-scratch Car Personalized Decorative Stickers Decals',
    price: 1299, // £12.99 in pence
    image: 'https://s.alicdn.com/@sc04/kf/H51332260164c4d9a93525f200632fb84d.jpg_1080x1080q80.jpg',
    category: 'Car Stickers',
    stock: 25,
    specifications: {
      material: 'Self-Adhesive Vinyl PVC Sticker',
      patterns: 'Car Body Side Stickers',
      function: 'decoration',
      features: ['Waterproof', 'UV-resistant', 'Easy to apply and remove', 'No residue', 'Weatherproof']
    },
    detailedDescription: 'Set of 2 cute "Bee" rear car stickers designed to add a playful touch to your vehicle. Made from durable, waterproof PVC material, these stickers are easy to apply on any smooth surface and resistant to weather conditions and UV rays. Perfect for car enthusiasts looking to personalize their ride with a fun and unique accessory. Ideal size for rear bumper or rear window. Set includes 2 identical stickers. Give your car a unique and charming look with this durable and adorable accessory!'
  },
  {
    id: '2',
    name: '2Pcs/set Car Vinyl Body Stickers SRT Demon Head',
    description: 'Latte DIY Modified Personality Sticker Decal',
    price: 2799, // £27.99 in pence
    image: 'https://s.alicdn.com/@sc04/kf/H70ce6df6a17d4deba638cb089d40968d2.jpg_960x960q80.jpg',
    category: 'Car Stickers',
    stock: 20,
    specifications: {
      size: '108*48cm/2pcs',
      material: 'Self-Adhesive Vinyl PVC Sticker',
      patterns: 'Car Body Side Stickers',
      function: 'decoration'
    }
  },
  {
    id: '3',
    name: '2Pcs/set Running Wolf Graphics Car Body Sticker',
    description: 'Self-Adhesive Wolf Decal Racing Sports Car Side Door Sticker',
    price: 3199, // £31.99 in pence
    image: 'https://s.alicdn.com/@sc04/kf/Hc9b78a1873104ceeb1a2003cb18a2f3aX.jpg_960x960q80.jpg',
    category: 'Car Stickers',
    stock: 18,
    specifications: {
      size: '130*50cm/2pcs',
      material: 'Self-Adhesive Vinyl PVC Sticker',
      patterns: 'Car Body Side Stickers',
      function: 'decoration'
    }
  },
  {
    id: '4',
    name: '2Pcs Car Body Decal Honeycomb Design',
    description: 'Decal Waterproof Decoration Vinyl Stickers Car Side Large Decal',
    price: 2899, // £28.99 in pence
    image: 'https://s.alicdn.com/@sc04/kf/Hffc21eb1a7414a06a5d2ba3a7c44889fm.jpg_960x960q80.jpg',
    category: 'Car Decals',
    stock: 16,
    specifications: {
      size: '100*47cm',
      material: 'PVC',
      features: ['Waterproof', 'UV resistant', 'scratch resistant'],
      color: 'black/color/Support custom colors'
    }
  },
  {
    id: '5',
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