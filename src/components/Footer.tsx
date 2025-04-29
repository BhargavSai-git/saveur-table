import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, MessageSquare, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      // In a real application, you would send this data to your server
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Saveur</h3>
            <p className="text-gray-400 mb-4">
              Experience the art of fine dining with our exquisite menu crafted by renowned chefs using only the freshest ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/restaurants/?hl=en" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/restaurants/?hl=en" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">Menu</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">Reservations</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                123 Gourmet Avenue<br/>
                New York, NY 10001
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@saveur.com" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                  info@saveur.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on special events, seasonal menus, and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 pl-4 pr-10 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#D4AF37]"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 text-[#D4AF37] hover:text-white transition-colors duration-300 focus:outline-none"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-green-400 text-sm mt-2 flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1" /> Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Saveur Restaurant. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 text-sm hover:text-[#D4AF37] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-sm hover:text-[#D4AF37] transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-500 text-sm hover:text-[#D4AF37] transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;