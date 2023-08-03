import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Header from './Components/Header';
import HeroBanner from './Components/HeroBanner';
import Categories from './Components/Categories';
// import Sidebar from './Components/SideBar';
import Home from './Components/Home';
import Sellers from './Components/Sellers';
import Footer from './Components/Footer';
 // Categories
import BevarageList from './Components/BevarageList.jsx';
import BevarageDetails from './Components/BevarageDetails.jsx';
import './index.css';

function App () {
  return (
    <BrowserRouter>
      <div className="app-container">

      <Header />
      <HeroBanner/>
      <Categories/>

        <>
        {/* <Sidebar /> */}
        <Routes>

        <Route path="/beverage" element={<BevarageList />} />
        <Route path="/beverage/:id" element={<BevarageDetails />} />


        </Routes>
        </>

      <Home/>
      <Sellers/>
      <Footer></Footer>
      </div>
     </BrowserRouter>
  );


};

export default App;




