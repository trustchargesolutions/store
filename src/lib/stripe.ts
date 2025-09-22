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