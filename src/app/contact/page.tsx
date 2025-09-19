import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - GrafixMood.co.uk | Car Stickers UK',
  description: 'Contact GrafixMood.co.uk for questions about car stickers, orders, shipping, and returns. Reach us via email for quick support.',
  keywords: 'contact us, customer support, car stickers, auto accessories, UK, GrafixMood, help, support',
};

export default function Contact() {
  return (
    <div className="bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
          
          <div className="space-y-8">
            <section>
              <p className="text-gray-700 text-lg mb-6">
                If you have any questions regarding your order, shipping, returns, or any other inquiries, please don't hesitate to contact us.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h2 className="text-xl font-semibold text-blue-900">Email Support</h2>
                </div>
                <p className="text-blue-800 text-lg mb-2">
                  <strong>Email:</strong> <a href="mailto:contact@grafixmood.co.uk" className="text-blue-600 hover:text-blue-800 underline font-medium">contact@grafixmood.co.uk</a>
                </p>
                <p className="text-blue-700">
                  We aim to respond within <strong>24 hours</strong> on business days.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Can Help With</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Order Support</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Order status inquiries</li>
                    <li>• Tracking information</li>
                    <li>• Order modifications</li>
                    <li>• Payment issues</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Support</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Product information</li>
                    <li>• Installation guidance</li>
                    <li>• Quality concerns</li>
                    <li>• Custom requests</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Returns & Refunds</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Return requests</li>
                    <li>• Refund status</li>
                    <li>• Damaged items</li>
                    <li>• Wrong items received</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">General Inquiries</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Business partnerships</li>
                    <li>• Wholesale inquiries</li>
                    <li>• Website feedback</li>
                    <li>• General questions</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Business Hours</h2>
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <p className="text-green-800 mb-2">
                  <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM (GMT)
                </p>
                <p className="text-green-700">
                  We respond to emails received outside business hours on the next working day.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Before You Contact Us</h2>
              <p className="text-gray-700 mb-4">
                To help us assist you more efficiently, please have the following information ready:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Your order number (if applicable)</li>
                <li>Email address used for the order</li>
                <li>Clear description of your inquiry or issue</li>
                <li>Photos (if reporting a product issue)</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
