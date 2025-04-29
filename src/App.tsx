import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import MenuSection from './components/MenuSection';
import InfoSection from './components/InfoSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Banner />
      <MenuSection />
      <InfoSection />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;