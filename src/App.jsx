import Header from "./Components/Header";
// import HeroBanner from './Components/HeroBanner';
// import Categories from './Components/Categories';
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";
// import HomeWithSellers from './Components/HomeWithSellers';
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import { CartProvider } from "react-use-cart";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <div>
        {/* <HomePage/> */}
        <Header />
        {/* <HeroBanner/> */}
        {/* <Categories/> */}
        {/* <HomeWithSellers /> */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
        {/* Add other components or content here */}
      </div>
    </CartProvider>
  );
}

export default App;
