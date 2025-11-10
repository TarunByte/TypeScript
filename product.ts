class Product {
  name: string;
  price: number;
  pId: number;
  inCart = false;
  isOrdered = false;
  constructor(name: string, price: number, pid: number) {
    (this.name = name), (this.price = price), (this.pId = pid);
  }
  addToCart(): void {
    this.inCart = true;
  }
  buyProduct(): string {
    if (this.inCart) {
      return `product ${this.name} is Ordered in ${this.price}`;
    } else {
      return `no product in cart`;
    }
  }
}

var product = new Product("Samsung", 100000, 101);
product.addToCart();
console.log(product.buyProduct());

var product = new Product("I phone", 200000, 301);
product.addToCart();
console.log(product.buyProduct());
