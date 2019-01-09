import React, { Component } from "react";
import PropTypes from 'prop-types';

const Header = ({ message, showCart, cartItems }) => {
  return (
    <div>
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      <button type="button" className="btn btn-primary" onClick={showCart}>
        Show Cart <span className="badge badge-light">{cartItems.length}</span>
      </button>
    </div>
  );
};

Header.propTypes = {
  message: PropTypes.string,
  showCart: PropTypes.func.isRequired,
  cartItems: PropTypes.array
}

export default Header;