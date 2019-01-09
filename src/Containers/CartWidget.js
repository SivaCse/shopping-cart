import React, { Component } from "react";
import List from "../Components/List";
import Cart from "../Components/Cart";
import Items from "../Api/products";
import ProductService from "../Services/ProductService";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { STATE } from "../Constants";

const pService = new ProductService();

export default class CartWidget extends Component {
  constructor(props) {
    super(props);
    this.state = STATE;
  }

  onQtyChange = (item, qty) => {
    this.setState({ items: pService.addItem(item, qty) });
  }

  addToCart = (item) => {
    this.setState({
      cartItems: pService.addToCart(item, this.state.cartItems)
    });
    this.alertMessage();
  }

  alertMessage = () => {
    this.setState({ message: `Item Added to Cart` });
    setTimeout(() => {
      this.setState({ message: `` });
    }, 1500);
  }

  handleDisplayCart = () => {
    this.setState({ showCart: !this.state.showCart });
  }

  onChangePage = (page) => {
    this.setState({ currentPage: page });
  }

  render() {
    const { message, showCart, cartItems } = this.state;
    const { handleDisplayCart } = this;
    return (
      <div className="row">
        <div className="col-md-4">
          <Header
            message={message}
            showCart={handleDisplayCart}
            cartItems={cartItems}
          />
          {!showCart && (
            <List
              items={this.state.items}
              onQtyChange={this.onQtyChange}
              onChangePage={this.onChangePage}
              currentPage={this.state.currentPage}
              addToCart={this.addToCart}
              limit={6}
            />
          )}

          <Footer showCart={showCart} cartItems={cartItems} />
        </div>
      </div>
    );
  }
}
