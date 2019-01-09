import React, { Component } from "react";

const Item = ({ item, onQtyChange, addToCart }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>
        <span className="item-price">{item.price}</span>
      </td>
      <td>
        <input
          type="text"
          onChange={event => onQtyChange(item, event.target.value)}
          pattern="\d*"
          size="2"
          className="form-control"
          placeholder="Enter Qty"
          value={item.qty}
        />
      </td>
      <td>
        <button className="btn btn-info" onClick={() => addToCart(item)}>Add to Cart</button>
      </td>
    </tr>
  );
};

export default Item;