import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import MeatList from './components/MeatList/MeatList';
import BeveragesList from './BeveragesList';
import BakeryList from './BakeryList';
import FruitsList from './FruitsList';
import VegetablesList from './VegetablesList';
import SpiceList from './SpiceList';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <SideBar />
        <Switch>
          <Route path="/meat" component={MeatList} />
          <Route path="/beverages" component={BeveragesList} />
          <Route path="/bakery" component={BakeryList} />
          <Route path="/fruits" component={FruitsList} />
          <Route path="/vegetables" component={VegetablesList} />
          <Route path="/spice" component={SpiceList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;



