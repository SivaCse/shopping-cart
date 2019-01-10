import React, { Component } from "react";
import PropTypes from 'prop-types';
import ProductStore from "../Store/Product";

const Header = ({ message, showCart }) => {
  return (
    <div>
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      <button type="button" className="btn btn-primary" onClick={showCart}>
        Items in Cart <span className="badge badge-light">{ProductStore.cartItems.length}</span>
      </button>
    </div>
  );
};

Header.propTypes = {
  message: PropTypes.string,
  showCart: PropTypes.func.isRequired
}

export default Header;