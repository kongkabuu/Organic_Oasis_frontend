import React from 'react';
import { BrowserRouter, Switch, Route, Routes  } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import MeatList from './components/MeatList/MeatList';
import BeveragesList from './BeveragesList';
import BakeryList from './BakeryList';
import FruitsList from './FruitsList';
import VegetablesList from './VegetablesList';
import SpiceList from './SpiceList';
import Header from "./components/Header/Header";
import Footer from"./components/Footer/Footer";
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
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
};

export default App;




