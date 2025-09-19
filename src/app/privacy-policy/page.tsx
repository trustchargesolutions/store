import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - GrafixMood.co.uk | Car Stickers UK',
  description: 'Privacy Policy for GrafixMood.co.uk, your UK online store for car stickers and auto accessories. How we collect, use, and protect your data in compliance with UK GDPR.',
  keywords: 'privacy policy, data protection, GDPR, car stickers, auto accessories, UK, GrafixMood, personal data',
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: 01.08.2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700">
                At GrafixMood.co.uk, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information in accordance with UK GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. What Information We Collect</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Personal details such as name, email address, and shipping address when you place an order</li>
                <li>Payment information, processed securely by third-party providers</li>
                <li>Technical data such as IP address and browsing behavior for analytics purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>To process and ship your orders</li>
                <li>To contact you about your order if necessary</li>
                <li>To improve our website and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell or rent your personal data. Your information may be shared with trusted partners, such as payment processors and delivery services, solely to fulfill your orders.
              </p>
              <p className="text-gray-700">
                Your information may be shared with trusted third-party partners (e.g. payment processors, shipping providers) only to complete your purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures, including SSL encryption and secure servers, to protect your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700">
                You have the right to access, correct, or delete your personal data at any time. For any requests, please contact us at <a href="mailto:contact@grafixmood.co.uk" className="text-blue-600 hover:text-blue-800 underline">contact@grafixmood.co.uk</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
              <p className="text-gray-700">
                Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences in your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy occasionally. Changes will be posted on this page with the updated date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@grafixmood.co.uk" className="text-blue-600 hover:text-blue-800 underline">contact@grafixmood.co.uk</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
