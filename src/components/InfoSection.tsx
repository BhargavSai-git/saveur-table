import React from 'react';
import { Clock, Award, Utensils } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section 1: Two-column layout */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#8B0000] mb-4">Our Culinary Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, Saveur has been the destination for food enthusiasts seeking an exceptional dining experience. 
              Our Chef, Michel Laurent, brings over 20 years of culinary expertise from the finest kitchens across Europe.
            </p>
            <p className="text-gray-600 mb-6">
              We believe in sourcing only the freshest, seasonal ingredients from local farmers and sustainable sources.
              Each dish is crafted with passion and precision, celebrating the rich flavors and traditions of French cuisine
              with a modern twist.
            </p>
            <a href="#contact" className="inline-block py-3 px-6 bg-[#8B0000] text-white font-medium rounded-md hover:bg-[#6d0000] transition-colors duration-300">
              Make a Reservation
            </a>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/3184188/pexels-photo-3184188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Our restaurant interior" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        {/* Section 2: Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFFDD0] rounded-full mb-6">
              <Clock className="w-8 h-8 text-[#8B0000]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-gray-800 mb-3">Opening Hours</h3>
            <p className="text-gray-600 mb-1">Monday - Thursday: 11am - 10pm</p>
            <p className="text-gray-600 mb-1">Friday - Saturday: 11am - 11pm</p>
            <p className="text-gray-600">Sunday: 11am - 9pm</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFFDD0] rounded-full mb-6">
              <Award className="w-8 h-8 text-[#8B0000]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-gray-800 mb-3">Awards & Recognition</h3>
            <p className="text-gray-600 mb-1">James Beard Award 2022</p>
            <p className="text-gray-600 mb-1">Michelin Star 2020-2023</p>
            <p className="text-gray-600">Best Fine Dining Experience 2021</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFFDD0] rounded-full mb-6">
              <Utensils className="w-8 h-8 text-[#8B0000]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-gray-800 mb-3">Special Events</h3>
            <p className="text-gray-600 mb-1">Private Dining Available</p>
            <p className="text-gray-600 mb-1">Chef's Table Experience</p>
            <p className="text-gray-600">Wine Pairing Evenings</p>
          </div>
        </div>
        
        {/* Section 3: Full width background */}
        <div className="mt-20 relative rounded-lg overflow-hidden">
          <div 
            className="bg-cover bg-center h-96"
            style={{ 
              backgroundImage: 'url("https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-8">
              <div className="text-center max-w-2xl">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Catering Services</h2>
                <p className="text-white text-lg mb-6">
                  Let us bring the Saveur experience to your event. Our catering services are available for parties, 
                  corporate events, weddings, and more.
                </p>
                <a href="#contact" className="inline-block py-3 px-6 bg-[#D4AF37] text-white font-medium rounded-md hover:bg-[#B8A241] transition-colors duration-300">
                  Inquire About Catering
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;