import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { products } from '@/data/products';

interface CheckoutItem {
  productId: string;
  quantity: number;
  variantId?: string;
  customText?: string;
}

export async function POST(request: NextRequest) {
  try {
    // Debug: Log the last 4 characters of the secret key to verify it's loaded correctly
    console.log('Using Stripe secret key ending in:', process.env.STRIPE_SECRET_KEY?.slice(-4));
    
    const { items }: { items: CheckoutItem[] } = await request.json();

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'No items provided' },
        { status: 400 }
      );
    }

    // Check if Stripe is properly configured
    if (!stripe) {
      console.error('Stripe is not configured properly');
      return NextResponse.json(
        { error: 'Payment system not configured' },
        { status: 500 }
      );
    }

    // Create line items for Stripe
    const lineItems = items.map((item: CheckoutItem) => {
      const product = products.find(p => p.id === item.productId);
      
      if (!product) {
        throw new Error(`Product with id ${item.productId} not found`);
      }

      let price = product.price;
      let name = product.name;
      let description = product.description;

      // Use custom text as the product name if provided
      if (item.customText) {
        name = item.customText;
      }

      // Handle variable products with variants
      if (product.isVariable && item.variantId && product.variants) {
        const variant = product.variants.find(v => v.id === item.variantId);
        if (!variant) {
          throw new Error(`Variant with id ${item.variantId} not found for product ${item.productId}`);
        }
        
        price = variant.price;
        if (variant.name) {
          name += ` - ${variant.name}`;
        }
        description = ``;
      }

      return {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: name,
            // description: description,
            images: [product.image],
          },
          unit_amount: price,
        },
        quantity: item.quantity,
      };
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      automatic_tax: { enabled: false },
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['GB'],
      },
    });

    return NextResponse.json({ sessionId: session.id });
    
  } catch (error) {
    console.error('Error creating checkout session:', error);
    
    // Handle specific Stripe errors
    if (error && typeof error === 'object' && 'type' in error) {
      const stripeError = error as any;
      if (stripeError.type === 'StripeAuthenticationError') {
        return NextResponse.json(
          { error: 'Payment system authentication failed. Please contact support.' },
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}