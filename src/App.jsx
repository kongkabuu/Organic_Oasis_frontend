import Header from './Components/Header';
import HeroBanner from './Components/HeroBanner';
import Categories from './Components/Categories';
import Home from './Components/Home';
import Sellers from './Components/Sellers';
import Footer from './Components/Footer';
import HomeWithSellers from './Components/HomeWithSellers';


function App() {
  return (
    <div>
      <Header />
      <HeroBanner/>
      <Categories/>
      {/* <Home/> */}
      {/* <Sellers/> */}
      <HomeWithSellers />
      <Footer/>
      {/* Add other components or content here */}
    </div>
  );
}

export default App;
