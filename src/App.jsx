import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Header from './Components/Header';
import HeroBanner from './Components/HeroBanner';
import Categories from './Components/Categories';
// import Sidebar from './Components/SideBar';
// import Home from './Components/Home';
// import Sellers from './Components/Sellers';
import Footer from './Components/Footer';
import HomeWithSellers from './Components/HomeWithSellers';
 // Categories
 import MeatList from './Components/Meat';
 import MeatDetails from './Components/Meat';
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




