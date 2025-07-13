import React from 'react';
import { ArrowLeft } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-800 to-slate-600 text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            اكتشف أحدث صيحات الموضة
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            مجموعة متميزة من الملابس العصرية للرجال والنساء بأفضل الأسعار
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
              تسوق الآن
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              اكتشف المجموعة
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full opacity-10 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-red-400 rounded-full opacity-15 animate-ping"></div>
    </section>
  );
};

export default HeroBanner;

