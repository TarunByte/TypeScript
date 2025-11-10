"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    name;
    price;
    pId;
    inCart = false;
    isOrdered = false;
    constructor(name, price, pid) {
        (this.name = name), (this.price = price), (this.pId = pid);
    }
    addToCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            return `product ${this.name} is Ordered in ${this.price}`;
        }
        else {
            return `no product in cart`;
        }
    }
}
class Order extends Product {
    constructor() {
        super("laptop", 100000, 403);
    }
    getPrice() {
        return this.price;
    }
}
var product = new Product("Samsung", 100000, 101);
// product.addToCart();
// console.log(product.buyProduct());
// console.log(product.name);
// console.log(product.price);
var order = new Order();
console.log(order.getPrice());
