import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';

// Client-side Stripe (safe to use in browser)
export const stripePromise = loadStripe(
  "pk_live_51RpsIg2NmA2VYZgYuqCPVz0oRvPTi2FNZAEtuiWkp3s1Bh7Ow2MD0Z8Yjsj58H6nEfeDY1kU6lFHvp7lcPmS7QKK00zuKWBuBM"
);

// Server-side Stripe (only create on server)
export const stripe = typeof window === 'undefined' 
  ? new Stripe("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", {
      apiVersion: '2024-06-20',
    })
  : null;