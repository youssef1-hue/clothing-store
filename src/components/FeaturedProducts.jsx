import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';

// Import images
import menImage1 from '../assets/men/HGt78cyiMZQI.jpg';
import menImage2 from '../assets/men/ER4em8AiOXoZ.jpg';
import womenImage1 from '../assets/women/cou8dOxtefaB.jpg';
import womenImage2 from '../assets/women/JTCBkmmKOhx3.jpg';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'بدلة رجالية أنيقة',
      price: 299,
      originalPrice: 399,
      image: menImage1,
      rating: 4.8,
      reviews: 124,
      category: 'رجالي',
      isNew: true,
      discount: 25
    },
    {
      id: 2,
      name: 'جاكيت كاجوال عصري',
      price: 159,
      originalPrice: 199,
      image: menImage2,
      rating: 4.6,
      reviews: 89,
      category: 'رجالي',
      isNew: false,
      discount: 20
    },
    {
      id: 3,
      name: 'فستان أنيق للمناسبات',
      price: 249,
      originalPrice: 329,
      image: womenImage1,
      rating: 4.9,
      reviews: 156,
      category: 'نسائي',
      isNew: true,
      discount: 24
    },
    {
      id: 4,
      name: 'بلوزة عملية راقية',
      price: 89,
      originalPrice: 119,
      image: womenImage2,
      rating: 4.7,
      reviews: 203,
      category: 'نسائي',
      isNew: false,
      discount: 25
    }
  ];

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              جديد
            </span>
          )}
          {product.discount > 0 && (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              -{product.discount}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors group">
          <Heart className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors" />
        </button>

        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full bg-slate-800 text-white py-2 rounded-full hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            أضف للسلة
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{product.rating}</span>
            <span className="text-sm text-gray-400">({product.reviews})</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-slate-800 mb-3 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-800">
              {product.price} ر.س
            </span>
            {product.originalPrice > product.price && (
              <span className="text-lg text-gray-400 line-through">
                {product.originalPrice} ر.س
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            المنتجات المميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اكتشف أحدث وأفضل المنتجات المختارة بعناية لتناسب ذوقك العصري
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-slate-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-700 transition-colors transform hover:scale-105">
            عرض جميع المنتجات
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

