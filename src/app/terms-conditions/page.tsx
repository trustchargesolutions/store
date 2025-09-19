import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and Conditions - GrafixMood.co.uk | Car Stickers Online Store UK',
  description: 'Read the Terms and Conditions for shopping at GrafixMood.co.uk, your UK online store for premium car stickers and auto accessories. Clear policies on orders, shipping, returns, and payments.',
  keywords: 'terms and conditions, car stickers, auto accessories, UK, GrafixMood, online store, shipping policy, returns policy',
};

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: 01.08.2025</p>
          <p className="text-gray-700 mb-8">
            Welcome to GrafixMood.co.uk. Please read these Terms and Conditions carefully before using our online store.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. About Us</h2>
              <p className="text-gray-700 mb-4">
                This website is operated by GrafixMood. We specialise in selling car stickers and auto accessories via dropshipping.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Website: www.grafixmood.co.uk</li>
                <li>Email: contact@grafixmood.co.uk</li>
                <li>Business location: UK-based online-only store</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing our website and placing an order, you agree to be bound by these Terms and Conditions. 
                If you do not agree with any part of these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Products</h2>
              <p className="text-gray-700 mb-4">
                All products sold on GrafixMood.co.uk are sourced from third-party suppliers. Images are for illustrative purposes only and slight variations may occur.
              </p>
              <p className="text-gray-700">
                All products are brand new and shipped directly from our suppliers. Delivery time typically ranges from 1 to 21 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Pricing and Payment</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>All prices are listed in GBP (£) and include applicable taxes</li>
                <li>We accept secure payments via credit/debit card and other listed payment providers at checkout</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Shipping & Delivery</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>We offer delivery only within the United Kingdom</li>
                <li>Standard delivery is free unless stated otherwise</li>
                <li>Delivery times vary depending on the product, but average between 1–21 business days. Tracking details will be provided when available</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Returns & Refunds</h2>
              <p className="text-gray-700 mb-4">
                You may request a return or refund within 14 days of receiving your item, provided the item is unused and in its original packaging.
              </p>
              <p className="text-gray-700 mb-4">
                To request a return, please email us at: <a href="mailto:contact@grafixmood.co.uk" className="text-blue-600 hover:text-blue-800 underline">contact@grafixmood.co.uk</a>
              </p>
              <p className="text-gray-700">
                Please note: As we work with external suppliers, return addresses may vary and return postage is the buyer's responsibility.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cancellations</h2>
              <p className="text-gray-700">
                Orders can only be cancelled within 12 hours of purchase. After that, the order will be processed and shipped.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on this website, including logos, images, and text, is the property of GrafixMood or its suppliers and is protected by copyright laws.
              </p>
              <p className="text-gray-700">
                You may not copy, reproduce or distribute any part of the site without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Liability</h2>
              <p className="text-gray-700">
                We are not liable for any indirect, incidental or consequential damages arising from the use or inability to use the website or products purchased from us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Privacy</h2>
              <p className="text-gray-700">
                Please refer to our <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link> for details on how we handle your personal data in accordance with UK GDPR regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-700">
                These terms are governed by and interpreted in accordance with the laws of England and Wales.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
