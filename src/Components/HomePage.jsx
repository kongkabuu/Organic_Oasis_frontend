import Header from "./Header";
import HeroBanner from "./HeroBanner";
import Categories from "./Categories";

import Footer from "./Footer";
import HomeWithSellers from "./HomeWithSellers";

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
