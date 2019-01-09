import React, { Component } from "react";

const Cart = ({ items }) => {
  return (
    <div>
        <h1>Cart Items</h1>
      <table className="table table-condensed table-bordered">
        <tbody>
            <tr><th>Product</th><th>Qty</th><th>Price</th><th>Total</th></tr>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name} </td>
              <td>
                x {item.qty} 
              </td>
              <td>{item.price}
              </td>
              <td> {item.qty * item.price}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
            <tr><td colSpan={3}></td><td><span className="badge badge-success">{items.reduce((acc, {qty, price}) => acc+(qty*price) ,0)}</span></td></tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
