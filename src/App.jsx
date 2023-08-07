import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Header from './Components/Header';
import HeroBanner from './Components/HeroBanner';
import Categories from './Components/Categories';
// import Sidebar from './Components/SideBar';
// import Home from './Components/Home';
// import Sellers from './Components/Sellers';
import Footer from './Components/Footer';
import HomeWithSellers from './Components/HomeWithSellers';
//  import Login from './Components/Login';
//  import SignUp from './Components/Sign-up';
 // Categories
 import MeatList from './Components/MeatList';
 import MeatDetails from './Components/MeatDetails';
 import DairyList from './Components/DairyList';
 import DairyDetails from './Components/DairyDetails';
 import BeverageList from './Components/BeverageList';
 import BeverageDetails from './Components/BeverageDetails';
//  import Cart from './Components/Cart';
//  import CartComponent from './Components/CartComponent';
//  import {CartProvider } from 'react-use-cart';
import './index.css';


function App () {
  return (
    <BrowserRouter>
      <div className="app-container">
      <Header />
      <HeroBanner/>
      <Categories/>
        <>

        <Routes>
        {/* <Sidebar /> */}
        {/* <Route path="/login" element={<LoginForm />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}


          {/* <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" component={<Login />} /> */}
        <Route path="/dairy" element={<DairyList />} />
        <Route path="/dairy/:id" element={<DairyDetails />} />

        <Route path="/meat" element={<MeatList />} />
        <Route path="/meat/:id" element={<MeatDetails />} />
        <Route path="/beverage" element={<BeverageList />} />
        <Route path="/beverage/:id" element={<BeverageDetails />} />
        </Routes>
        </>

      {/* <Home/> */}
      {/* <Sellers/> */}

      <HomeWithSellers />
      {/* <Cart />
      <CartComponent/> */}

      <Footer></Footer>
      </div>
     </BrowserRouter>
  );


};

export default App;




