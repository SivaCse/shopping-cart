import React, { Component } from "react";
import PropTypes from 'prop-types';
import Cart from "../Components/Cart";


const Footer = ({ showCart, cartItems }) => {
  return (
    <div>
       {showCart && <Cart items={cartItems} />}
    </div>
  );
};

Footer.propTypes = {
  showCart: PropTypes.bool.isRequired,
  cartItems: PropTypes.array
};

export default Footer;