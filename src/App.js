import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop.component";

const HatsPage = () => {
  return (
    <div>
      <h2>Hast Page</h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
