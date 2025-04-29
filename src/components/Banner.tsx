import React, { useEffect, useState } from 'react';

const Banner: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax"
        style={{ 
          backgroundImage: 'url("https://media.istockphoto.com/id/1625128715/photo/most-common-allergens-food-shot-from-above.jpg?s=612x612&w=0&k=20&c=eySnRGClbojCE57tM2QdCdbVM7Gq63mwTXghpM_Lzvo=")',
          transform: `translateY(${scrollPosition * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Floating Elements */}
      <div 
        className="absolute w-32 h-32 rounded-full bg-[#D4AF37] opacity-10"
        style={{ 
          top: '20%',
          left: '10%',
          transform: `translate(${scrollPosition * 0.2}px, ${scrollPosition * -0.1}px)`,
        }}
      ></div>
      <div 
        className="absolute w-24 h-24 rounded-full bg-[#8B0000] opacity-10"
        style={{ 
          bottom: '30%',
          right: '15%',
          transform: `translate(${scrollPosition * -0.2}px, ${scrollPosition * 0.1}px)`,
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          A Culinary Journey
        </h1>
        <p 
          className="text-xl md:text-2xl lg:text-3xl text-white mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
        >
          Experience the art of fine dining in every bite
        </p>
        <div 
          className="flex flex-col sm:flex-row justify-center gap-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
        >
          <a 
            href="#menu" 
            className="py-4 px-10 bg-[#8B0000] text-white font-medium rounded-full hover:bg-[#6d0000] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Menu
          </a>
          <a 
            href="#contact" 
            className="py-4 px-10 bg-transparent text-white font-medium rounded-full border-2 border-white hover:bg-white hover:text-[#8B0000] transform hover:scale-105 transition-all duration-300"
          >
            Make Reservation
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        style={{ 
          opacity: Math.max(0, 1 - scrollPosition / 300),
          transform: `translate(-50%, ${scrollPosition * 0.5}px)`,
        }}
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-4 animate-bounce">Scroll to Discover</span>
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1 h-3 bg-white rounded-full mx-auto animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;