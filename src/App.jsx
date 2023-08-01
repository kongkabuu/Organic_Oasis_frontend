import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import MeatList from './MeatList';
import BeveragesList from './BeveragesList';
import BakeryList from './BakeryList';
import FruitsList from './FruitsList';
import VegetablesList from './VegetablesList';
import SpiceList from './SpiceList';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
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



