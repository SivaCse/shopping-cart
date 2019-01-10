import React, { Component } from "react";
import PropTypes from 'prop-types';
import Cart from "../Components/Cart";
import ProductStore from "../Store/Product";


const Footer = () => {
  return (
    <div className="row">
        <div className="col-md-4">
       <Cart items={ProductStore.cartItems} />
       </div>
    </div>
  );
};

export default Footer;