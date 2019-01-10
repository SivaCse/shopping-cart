import React, { Component } from "react";
import List from "../Components/List";
import ProductStore from "../Store/Product";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { APP_STATE } from "../Constants";


export default class CartWidget extends Component {
  constructor(props) {
    super(props);
    this.state = APP_STATE;
    this.onQtyChange = this.onQtyChange.bind(this);
    this.alertMessage = this.alertMessage.bind(this);
    this.onQtyChange = this.alertMessage.bind(this);
    this.handleDisplayCart = this.handleDisplayCart.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  onQtyChange(item, qty) {
    this.setState({ items: ProductStore.addItem(item, qty) });
  }

  addToCart(item) {
    this.setState({
      cartItems: ProductStore.addToCart(item, this.state.cartItems)
    });
    this.alertMessage();
  }

  alertMessage() {
    this.setState({ message: `Item Added to Cart` });
    setTimeout(() => {
      this.setState({ message: `` });
    }, 1500);
  }

  handleDisplayCart() {
    this.setState({ showCart: !this.state.showCart });
  }

  onChangePage(page) {
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

        </div>
      </div>
    );
  }
}
