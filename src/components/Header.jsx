import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-slate-800">متجر الأناقة</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#home" className="text-slate-700 hover:text-red-500 transition-colors font-medium">
              الرئيسية
            </a>
            <a href="#men" className="text-slate-700 hover:text-red-500 transition-colors font-medium">
              ملابس رجالية
            </a>
            <a href="#women" className="text-slate-700 hover:text-red-500 transition-colors font-medium">
              ملابس نسائية
            </a>
            <a href="#offers" className="text-slate-700 hover:text-red-500 transition-colors font-medium">
              العروض
            </a>
            <a href="#contact" className="text-slate-700 hover:text-red-500 transition-colors font-medium">
              اتصل بنا
            </a>
          </nav>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* Search Bar */}
            <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-gray-500 ml-2" />
              <input
                type="text"
                placeholder="ابحث عن المنتجات..."
                className="bg-transparent outline-none text-sm w-48 text-right"
              />
            </div>

            {/* User Icon */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-5 h-5 text-slate-700" />
            </button>

            {/* Shopping Cart */}
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5 text-slate-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-slate-700" />
              ) : (
                <Menu className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-slate-700 hover:text-red-500 transition-colors font-medium py-2">
                الرئيسية
              </a>
              <a href="#men" className="text-slate-700 hover:text-red-500 transition-colors font-medium py-2">
                ملابس رجالية
              </a>
              <a href="#women" className="text-slate-700 hover:text-red-500 transition-colors font-medium py-2">
                ملابس نسائية
              </a>
              <a href="#offers" className="text-slate-700 hover:text-red-500 transition-colors font-medium py-2">
                العروض
              </a>
              <a href="#contact" className="text-slate-700 hover:text-red-500 transition-colors font-medium py-2">
                اتصل بنا
              </a>
              {/* Mobile Search */}
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mt-4">
                <Search className="w-4 h-4 text-gray-500 ml-2" />
                <input
                  type="text"
                  placeholder="ابحث عن المنتجات..."
                  className="bg-transparent outline-none text-sm flex-1 text-right"
                />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

