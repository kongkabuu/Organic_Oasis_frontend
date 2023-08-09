import React from 'react';
// import Header from './Components/Header';
import HeroBanner from './HeroBanner'
import Categories from './Categories';
// import Footer from './Components/Footer';
import HomeWithSellers from './HomeWithSellers';

function HomePage() {
  return (
    <div>
      {/* <Header /> */}
      <HeroBanner />
      <Categories />
      <HomeWithSellers />
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
