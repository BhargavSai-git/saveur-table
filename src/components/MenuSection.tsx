import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import MenuItemModal from './MenuItemModal';
import { menuItems, MenuItem as MenuItemType } from '../data/menuData';
import { Search } from 'lucide-react';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);
  const [animateItems, setAnimateItems] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('menu');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75 && !animateItems) {
          setAnimateItems(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animateItems]);

  const categories = [
    { id: 'all', name: 'All', icon: '🍽️' },
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'main-course', name: 'Main Course', icon: '🍖' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🍷' }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 bg-accent-light/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Our Menu</h2>
          <p className="text-primary-light max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, crafted with passion and the finest ingredients.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search our menu..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 pl-4 pr-12 rounded-full border-2 border-primary/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-light" />
          </div>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          <div className="inline-flex flex-wrap justify-center gap-3 p-2 bg-white rounded-full shadow-lg">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white shadow-md transform scale-105' 
                    : 'bg-transparent text-primary-light hover:bg-accent-light/20'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`opacity-0 ${animateItems ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <MenuItem 
                  item={item} 
                  onClick={() => setSelectedItem(item)} 
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-primary-light text-lg">No menu items found. Please try a different search.</p>
          </div>
        )}
      </div>
      
      {/* Modal */}
      {selectedItem && (
        <MenuItemModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </section>
  );
};

export default MenuSection;