import Header from './Components/Header';
// import HeroBanner from './Components/HeroBanner';
// import Categories from './Components/Categories';
import Footer from './Components/Footer';
import Profile from './Components/Profile';
// import HomeWithSellers from './Components/HomeWithSellers';
import { Route,Routes} from 'react-router-dom';
import HomePage from './Components/HomePage';
import Products from './Components/Products';


function App() {
  return (
    <div>
      {/* <HomePage/> */}
      <Header/>
      {/* <HeroBanner/> */}
      {/* <Categories/> */}
      {/* <HomeWithSellers /> */}



        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/products" element={<Products/>}/>
        </Routes>
        <Footer/>
      {/* Add other components or content here */}
    </div>
  );
}

export default App;
