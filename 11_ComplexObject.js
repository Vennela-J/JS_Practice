let order = {
  orderId: "A12345",
  customer: {
    name: "Emily",
    address: "123 Main St",
    contact: {
      email: "emily@example.com",
      phone: "555-1234"
    }
  },
  products: [
    {
      productName: "Laptop",
      quantity: 1,
      price: 1200
    },
    {
      productName: "Mouse",
      quantity: 2,
      price: 20
    }
  ],
  getTotal:function(){
    return this.products.reduce((total,prod)=>total+(prod.quantity*prod.price),0);
  }

};

console.log(order.customer.contact.email);  // Output: emily@example.com
console.log(order.getTotal());  // Output: 1240

