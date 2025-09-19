import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Hero Section */}
        <div className="text-center mb-12 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Car Stickers & Accessories Designed to Stand Out
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Delivered Across the UK
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At GrafixMood, we bring style and personality to your car through high-quality stickers and custom accessories. 
            Based in the UK, we focus on fast delivery, bold designs, and a seamless online shopping experience.
          </p>
        </div>

        {/* Products Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Premium Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

    
      </div>
    </div>
  );
}