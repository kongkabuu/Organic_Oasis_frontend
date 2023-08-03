import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Header from './Components/Header';
import HeroBanner from './Components/HeroBanner';
import Categories from './Components/Categories';
import Home from './Components/Home';
import Sellers from './Components/Sellers';
import Footer from './Components/Footer';
 // Categories
import SideBar from './Components/SideBar';
import BevarageList from './Components/BevarageList.jsx';
import './index.css';

function App () {
  return (
    <BrowserRouter>
      <div className="app-container">
      <div>
      <Header />
      <HeroBanner/>
      <Categories/>
      <Home/>
      <Sellers/>
    </div>
        <>
        <Routes>
        <SideBar />

          <Route path="/beverage" component={BevarageList} />

        </Routes>
        </>
      </div>
      <Footer></Footer>
     </BrowserRouter>
  );


};

export default App;




