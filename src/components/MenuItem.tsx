import React from 'react';
import { MenuItem as MenuItemType } from '../data/menuData';

interface MenuItemProps {
  item: MenuItemType;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onClick }) => {
  return (
    <div 
      className="menu-card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:shadow-2xl"
      onClick={onClick}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 text-white">
            <span className="text-sm font-medium bg-[#8B0000] px-3 py-1 rounded-full">
              ${item.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-serif text-xl font-semibold text-gray-800 group-hover:text-[#8B0000] transition-colors duration-300">
            {item.name}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {item.dietary && (
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {item.dietary}
              </span>
            )}
            {item.spicyLevel > 0 && (
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {Array(item.spicyLevel).fill('🌶️').join('')}
              </span>
            )}
          </div>
          
          <button 
            className="text-[#8B0000] font-medium text-sm hover:text-[#D4AF37] transition-colors duration-300 focus:outline-none"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;