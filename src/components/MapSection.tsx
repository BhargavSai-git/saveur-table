import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const MapSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#FFFDD0]/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#8B0000] mb-4">Find Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit us to experience our exceptional cuisine and warm hospitality. We're located in the heart of the city.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Contact Information */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#8B0000] mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Address</h4>
                  <p className="text-gray-600">123 Gourmet Avenue</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-[#8B0000] mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-[#8B0000] mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">info@saveur.com</p>
                  <p className="text-gray-600">reservations@saveur.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-[#8B0000] mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Hours</h4>
                  <p className="text-gray-600">Monday - Thursday: 11am - 10pm</p>
                  <p className="text-gray-600">Friday - Saturday: 11am - 11pm</p>
                  <p className="text-gray-600">Sunday: 11am - 9pm</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-gray-800 mb-3">Reservation Policy</h4>
              <p className="text-gray-600 text-sm mb-4">
                Reservations are recommended, especially for dinner service and weekends. 
                Please call at least 24 hours in advance or use our online reservation system.
              </p>
              <a 
                href="#" 
                className="inline-block py-3 px-6 w-full text-center bg-[#8B0000] text-white font-medium rounded-md hover:bg-[#6d0000] transition-colors duration-300"
              >
                Make a Reservation
              </a>
            </div>
          </div>
          
          {/* Map */}
          <div className="md:col-span-3 bg-white rounded-lg shadow-md overflow-hidden h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25903e421f385%3A0x6d71b45d9cd0e1a5!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1659371045769!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;