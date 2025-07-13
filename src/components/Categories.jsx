import React from 'react';
import { ArrowLeft } from 'lucide-react';

// Import images
import menImage from '../assets/men/JOLLV6d6Lgjw.jpg';
import womenImage from '../assets/women/yG3kdg66AfgC.jpg';

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: 'ملابس رجالية',
      subtitle: 'أناقة وتميز',
      description: 'اكتشف مجموعة واسعة من الملابس الرجالية العصرية',
      image: menImage,
      itemCount: '200+ منتج',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 2,
      title: 'ملابس نسائية',
      subtitle: 'جمال وأناقة',
      description: 'تشكيلة رائعة من الأزياء النسائية الراقية',
      image: womenImage,
      itemCount: '300+ منتج',
      color: 'from-pink-600 to-pink-800'
    }
  ];

  const CategoryCard = ({ category }) => (
    <div className="relative group overflow-hidden rounded-3xl shadow-2xl h-96 cursor-pointer transform transition-all duration-500 hover:scale-105">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
        <div className="transform transition-transform duration-300 group-hover:translate-y-[-10px]">
          <span className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
            {category.itemCount}
          </span>
          
          <h3 className="text-3xl font-bold mb-2">
            {category.title}
          </h3>
          
          <p className="text-xl font-medium mb-3 opacity-90">
            {category.subtitle}
          </p>
          
          <p className="text-base opacity-80 mb-6 leading-relaxed">
            {category.description}
          </p>

          <button className="inline-flex items-center gap-2 bg-white text-slate-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            تسوق الآن
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white border-opacity-30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
      <div className="absolute bottom-6 left-6 w-8 h-8 bg-white bg-opacity-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-bounce"></div>
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            تسوق حسب الفئة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اختر من مجموعتنا المتنوعة من الملابس العصرية للرجال والنساء
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Special Offers Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              عروض خاصة هذا الأسبوع
            </h3>
            <p className="text-xl mb-6 opacity-90">
              خصومات تصل إلى 50% على مجموعة مختارة من المنتجات
            </p>
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
              اكتشف العروض
            </button>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white bg-opacity-10 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Categories;

