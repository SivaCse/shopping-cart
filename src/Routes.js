import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CartWidget from './Containers/CartWidget';
import Cart from './Components/Footer';
import ProductDetail from './Components/ProductDetail';

const Routes = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/my-cart">My Cart</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={CartWidget} />
        <Route path="/my-cart" component={Cart} />
        <Route path="/product-detail/:name" component={ProductDetail} />
      </div>
    </Router>
  );
}

export default Routes;