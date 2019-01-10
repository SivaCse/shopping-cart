import Items from "../Api/products";

export default class ProductService {

  constructor() {
    this.cartItems = [];
  }

  getItems() {
    return this.Items;
  }
  
  getItemIndex({ name }) {
    return Items.findIndex(item => item.name === name);
  }

  getItem({ name }) {
    return Items.find(item => item.name === name);
  }

  addItem(item, qty) {
    const index = this.getItemIndex(item);
    Items[index] = Object.assign(Items[index], { qty: parseInt(qty) });
    return Items;
  }

  addToCart(item, cartItems) {
    const addedItems = [...cartItems, item];
    this.cartItems = addedItems;
    return addedItems;
  }
}
