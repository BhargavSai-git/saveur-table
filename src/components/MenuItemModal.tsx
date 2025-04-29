import React, { useEffect, useRef } from 'react';
import { X, Clock, AlertTriangle, Utensils } from 'lucide-react';
import { MenuItem } from '../data/menuData';

interface MenuItemModalProps {
  item: MenuItem;
  onClose: () => void;
}

const MenuItemModal: React.FC<MenuItemModalProps> = ({ item, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto animate-scale-in"
      >
        <div className="relative">
          <div className="h-72 md:h-96 overflow-hidden rounded-t-2xl">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-110"
            />
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white focus:outline-none transition-all duration-300 hover:scale-110"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-primary" />
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">{item.name}</h2>
            <span className="text-2xl font-medium text-accent">${item.price.toFixed(2)}</span>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 rounded-full bg-accent-light/20 text-primary-light text-sm flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {item.prepTime} min
            </span>
            {item.dietary && (
              <span className="px-4 py-2 rounded-full bg-accent-light/20 text-primary-light text-sm flex items-center gap-2">
                <Utensils className="w-4 h-4" />
                {item.dietary}
              </span>
            )}
            {item.spicyLevel > 0 && (
              <span className="px-4 py-2 rounded-full bg-accent-light/20 text-primary-light text-sm">
                Spicy: {Array(item.spicyLevel).fill('🌶️').join('')}
              </span>
            )}
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Description</h3>
              <p className="text-primary-light leading-relaxed">{item.description}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Ingredients</h3>
              <p className="text-primary-light leading-relaxed">{item.ingredients}</p>
            </div>
            
            {item.allergens && (
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-accent" />
                  Allergens
                </h3>
                <p className="text-primary-light leading-relaxed">{item.allergens}</p>
              </div>
            )}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
            <button 
              className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-light transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              Add to Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemModal;