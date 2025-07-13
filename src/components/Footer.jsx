import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Truck, Shield, RotateCcw } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      {/* Features Section */}
      <div className="border-b border-slate-700">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">شحن مجاني</h3>
              <p className="text-gray-300">للطلبات أكثر من 200 ريال</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">إرجاع مجاني</h3>
              <p className="text-gray-300">خلال 30 يوم من الشراء</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">دفع آمن</h3>
              <p className="text-gray-300">حماية كاملة لبياناتك</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">طرق دفع متعددة</h3>
              <p className="text-gray-300">فيزا، ماستركارد، مدى</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">متجر الأناقة</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              وجهتك الأولى للحصول على أفضل الملابس العصرية بأسعار منافسة. نقدم لك تشكيلة واسعة من الأزياء الراقية للرجال والنساء.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="bg-slate-700 p-3 rounded-full hover:bg-red-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-700 p-3 rounded-full hover:bg-red-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-700 p-3 rounded-full hover:bg-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-700 p-3 rounded-full hover:bg-red-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ملابس رجالية</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ملابس نسائية</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">العروض</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">الماركات</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">المدونة</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6">خدمة العملاء</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">اتصل بنا</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">سياسة الإرجاع</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">سياسة الشحن</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">دليل المقاسات</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">تتبع الطلب</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">الرياض، المملكة العربية السعودية</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span className="text-gray-300" dir="ltr">+966 50 123 4567</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">info@elegance-store.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">اشترك في النشرة الإخبارية</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-4 py-2 rounded-r-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-red-500 px-6 py-2 rounded-l-lg hover:bg-red-600 transition-colors">
                  اشترك
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-center md:text-right mb-4 md:mb-0">
              © 2025 متجر الأناقة. جميع الحقوق محفوظة.
            </p>
            
            <div className="flex items-center space-x-4 space-x-reverse">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">سياسة الخصوصية</a>
              <span className="text-gray-500">|</span>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">الشروط والأحكام</a>
              <span className="text-gray-500">|</span>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">ملفات تعريف الارتباط</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

