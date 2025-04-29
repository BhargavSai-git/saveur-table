import React, { useState, useEffect } from 'react';
import { Search, Instagram, Facebook, Twitter, Phone, Mail, Menu as MenuIcon, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`font-serif font-bold text-2xl md:text-3xl transition-colors duration-300 ${isScrolled ? 'text-[#8B0000]' : 'text-white'}`}>
              Saveur
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-[#8B0000]' : 'text-white hover:text-[#D4AF37]'}`}>Home</a>
            <a href="#menu" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-[#8B0000]' : 'text-white hover:text-[#D4AF37]'}`}>Menu</a>
            <a href="#about" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-[#8B0000]' : 'text-white hover:text-[#D4AF37]'}`}>About</a>
            <a href="#contact" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-[#8B0000]' : 'text-white hover:text-[#D4AF37]'}`}>Contact</a>
          </nav>

          {/* Search, Contact and Social Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search */}
            <div className={`relative ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              <input 
                type="text" 
                placeholder="Search..." 
                className={`w-40 py-1 pl-2 pr-8 rounded-md border ${isScrolled ? 'border-gray-300 bg-white text-gray-800' : 'border-white/30 bg-white/10 text-white placeholder:text-white/70'} focus:outline-none`}
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4" />
            </div>
            
            {/* Contact */}
            <div className="flex items-center space-x-4">
              <a href="tel:+1234567890" className={`flex items-center transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-[#8B0000]' : 'text-white hover:text-[#D4AF37]'}`}>
                <Phone className="w-4 h-4 mr-1" />
                <span className="text-sm">123-456-7890</span>
              </a>
              <a href="mailto:info@saveur.com" className={`flex items-center transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-[#8B0000]' : 'text-white hover:text-[#D4AF37]'}`}>
                <Mail className="w-4 h-4 mr-1" />
                <span className="text-sm">info@saveur.com</span>
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className={`transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-[#8B0000]' : 'text-white hover:text-[#D4AF37]'}`}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className={`transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-[#8B0000]' : 'text-white hover:text-[#D4AF37]'}`}>
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className={`transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-[#8B0000]' : 'text-white hover:text-[#D4AF37]'}`}>
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a href="#home" className="block py-2 text-gray-800 hover:text-[#8B0000]">Home</a>
            <a href="#menu" className="block py-2 text-gray-800 hover:text-[#8B0000]">Menu</a>
            <a href="#about" className="block py-2 text-gray-800 hover:text-[#8B0000]">About</a>
            <a href="#contact" className="block py-2 text-gray-800 hover:text-[#8B0000]">Contact</a>
            
            <div className="pt-2 border-t border-gray-200">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full py-2 pl-3 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#8B0000]"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
            </div>
            
            <div className="pt-2 border-t border-gray-200">
              <div className="flex items-center space-x-4 py-2">
                <a href="tel:+1234567890" className="flex items-center text-gray-800 hover:text-[#8B0000]">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>123-456-7890</span>
                </a>
              </div>
              <div className="flex items-center space-x-4 py-2">
                <a href="mailto:info@saveur.com" className="flex items-center text-gray-800 hover:text-[#8B0000]">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@saveur.com</span>
                </a>
              </div>
            </div>
            
            <div className="pt-2 border-t border-gray-200">
              <div className="flex items-center space-x-6 py-2">
                <a href="#" className="text-gray-800 hover:text-[#8B0000]">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-800 hover:text-[#8B0000]">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-800 hover:text-[#8B0000]">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;