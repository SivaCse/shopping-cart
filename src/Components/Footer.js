import React, { Component } from "react";
import Cart from "../Components/Cart";

const Footer = ({ showCart, cartItems }) => {
  return (
    <div>
       {showCart && <Cart items={cartItems} />}
    </div>
  );
};

export default Footer;