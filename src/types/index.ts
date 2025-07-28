export interface ProductVariant {
  id: string;
  name: string;
  price: number; // Price in cents
  quantity: number; // Number of items in this pack
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // Base price in cents (for simple products)
  image: string;
  category: string;
  stock: number;
  isVariable?: boolean; // New field to indicate if product has variants
  variants?: ProductVariant[]; // Available variants for variable products
  allowsCustomization?: boolean; // New field for products that allow text customization
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: ProductVariant; // Selected variant for variable products
  customText?: string; // Custom text input by the user
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface CheckoutSession {
  id: string;
  url: string;
}