import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Header from './Components/Header';
import HeroBanner from './Components/HeroBanner';
import Categories from './Components/Categories';
// import Sidebar from './Components/SideBar';
// import Home from './Components/Home';
// import Sellers from './Components/Sellers';
import Footer from './Components/Footer';
import HomeWithSellers from './Components/HomeWithSellers';
import Login from "./components/Login";
import SignUp from "./components/Sign-up";
 // Categories
 import MeatList from './Components/MeatList';
 import MeatDetails from './Components/MeatDetails';
 import DairyList from './Components/Dairy';
 import DairyDetails from './Components/Dairy';


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
        <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />

        <Route path="/dairy" element={<DairyList />} />
        <Route path="/dairy/:id" element={<DairyDetails />} />

        <Route path="/meat" element={<MeatList />} />
        <Route path="/meat/:id" element={<MeatDetails />} />
        </Routes>
        </>

      {/* <Home/> */}
      {/* <Sellers/> */}
      <HomeWithSellers />
      <Footer></Footer>
      </div>
     </BrowserRouter>
  );


};

export default App;




