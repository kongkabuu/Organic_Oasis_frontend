import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";
import Categories from "./Components/Categories";

import Footer from "./Components/Footer";
import HomeWithSellers from "./Components/HomeWithSellers";

function HomePage() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Categories />

      <HomeWithSellers />
      <Footer />
    </div>
  );
}

export default HomePage;
