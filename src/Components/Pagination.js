import React, { Component } from "react";

export const pageData = (items, limit, currentPage) => {
    const maxPages = Math.ceil(items.length / limit);
    const limitPerPage = [..."*".repeat(maxPages)];
    const slicedItems =
      currentPage === 1
        ? [0, limit]
        : [limit * (currentPage - 1), limit * (currentPage - 1) + limit];
    const filteredItems = items.slice(...slicedItems);
    return {
      pages: limitPerPage,
      pageItems: filteredItems
    };
  };
  
  const Pagination = ({ items, limit, currentPage, onChangePage }) => {
    const { pages } = pageData(items, limit, currentPage);
    return (
      <tr align="center">
        <td colSpan="4">
        <ul className="pagination">
          {pages.map((item, index) => (
            <li key={index}>
              <a href="#" onClick={() => onChangePage(index + 1)}>
                {index + 1}
              </a>{" "}
            </li>
          ))}
          </ul>
        </td>
      </tr>
    );
  };

  export default Pagination;