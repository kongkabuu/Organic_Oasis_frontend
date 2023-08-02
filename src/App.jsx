
import { BrowserRouter, Switch, Route, Routes  } from 'react-router-dom';
import Header from './Components/Header';
import HeroBanner from './Components/HeroBanner';
import Categories from './Components/Categories';
import Home from './Components/Home';
import Sellers from './Components/Sellers';
import Footer from './Components/Footer';
 // Categories
import SideBar from './Components/SideBar/SideBar';
import MeatList from './Components/MeatList/MeatList';
import BeveragesList from './BeveragesList';
import BakeryList from './BakeryList';
import FruitsList from './FruitsList';
import VegetablesList from './VegetablesList';
import SpiceList from './SpiceList';
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
        <Switch>
          <Route path="/meat" component={MeatList} />
          <Route path="/beverages" component={BeveragesList} />
          <Route path="/bakery" component={BakeryList} />
          <Route path="/fruits" component={FruitsList} />
          <Route path="/vegetables" component={VegetablesList} />
          <Route path="/spice" component={SpiceList} />
        </Switch>
        </Routes>
        </>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );

    <div>
      <Header />
      <HeroBanner/>
      <Categories/>
      <Home/>
      <Sellers/>
      <Footer/>
      {/* Add other components or content here */}
    </div>
};

export default App;




