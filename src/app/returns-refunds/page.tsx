import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Return & Refund Policy - GrafixMood.com | Car Stickers UK',
  description: 'Return and refund policy for GrafixMood.com, your UK online store for car stickers and auto accessories. Clear rules on returns, eligibility, and refunds.',
  keywords: 'return policy, refund policy, car stickers, auto accessories, UK, GrafixMood, returns, refunds',
};

export default function ReturnsRefunds() {
  return (
    <div className="bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Return & Refund Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: 01.08.2025</p>
          <p className="text-gray-700 mb-8">
            At GrafixMood, customer satisfaction is a priority. However, due to the nature of our products (self-adhesive stickers), returns are only accepted under strict conditions.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Eligibility for Return</h2>
              <p className="text-gray-700 mb-4">
                You may request a return within <strong>14 days</strong> of delivery only if:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>The product is unused, unopened, and in its original condition</li>
                <li>The adhesive backing has not been removed or touched</li>
                <li>The product is not custom-made or personalised</li>
              </ul>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-red-700 font-medium">
                  <strong>Important:</strong> If a sticker has been peeled, applied, or altered in any way, it is not eligible for return or refund.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Return Period</h2>
              <p className="text-gray-700">
                You may request a return within <strong>14 days</strong> of receiving your order.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Return Process</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Email us at <a href="mailto:contact@GrafixMood.com" className="text-blue-600 hover:text-blue-800 underline">contact@GrafixMood.com</a> with your order number and reason for return</li>
                <li>You are responsible for return shipping costs</li>
                <li>After inspecting the returned product, we will process the refund within 7 working days</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Return Shipping</h2>
              <p className="text-gray-700">
                Return shipping costs are the responsibility of the customer unless the product is defective or incorrect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Damaged or Incorrect Items</h2>
              <p className="text-gray-700 mb-4">
                If you received a defective or wrong item:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Contact us within <strong>48 hours</strong> of delivery</li>
                <li>Include clear photos of the product and packaging</li>
                <li>A replacement or refund will be offered at no cost</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Refund Process</h2>
              <p className="text-gray-700">
                Once we receive and inspect the returned item, we will process your refund within <strong>7 working days</strong>. Refunds will be issued to the original payment method.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about our return policy, please contact us at <a href="mailto:contact@GrafixMood.com" className="text-blue-600 hover:text-blue-800 underline">contact@GrafixMood.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
