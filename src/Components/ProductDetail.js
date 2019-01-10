import React from "react";
import ProductStore from "../Store/Product";

const ProductDetail = (props) => {
    const productName = props.match.params.name;
    const item = ProductStore.getItem({name: productName});
    const { name, price } = item;
  return (
    <div className="row">
    <div className="col-md-4">  
    <div className="card">
        <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/71v-7ORABOL._SX679_.jpg" alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    </div>
    </div>
  );
};

export default ProductDetail;