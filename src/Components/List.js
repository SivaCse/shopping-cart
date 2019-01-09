import React, { Component } from "react";
import Item from './Item';
import Pagination, { pageData } from './Pagination';

const List = ({
  items,
  onQtyChange,
  limit,
  onChangePage,
  currentPage,
  addToCart
}) => {
  const { pageItems } = pageData(items, limit, currentPage);
  return (
    <div>
        <h1>Products</h1>
        <table className="table table-condensed table-bordered">
          <tbody>
          <tr><th>Product</th><th>Price</th><th>Qty Enter</th><th>Operation</th></tr>
            {pageItems.map(item => (
              <Item
                key={item.name}
                item={item}
                onQtyChange={onQtyChange}
                addToCart={addToCart}
              />
            ))}
          </tbody>
          <tfoot>
            <Pagination
              items={items}
              limit={limit}
              currentPage={currentPage}
              onChangePage={onChangePage}
            />
          </tfoot>
        </table>
    </div>
  );
};

export default List;
