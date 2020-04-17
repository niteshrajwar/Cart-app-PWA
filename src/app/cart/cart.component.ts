import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 public noItemInCart = true;
 public cartItems = [];
 public totalPrice = 0;
 public discount = 0;
  constructor() { }

  ngOnInit() {
    if (typeof window !== 'undefined' && localStorage && localStorage.getItem("Cart")) {
       this.cartItems = JSON.parse(localStorage.getItem("Cart"));
       this.noItemInCart = this.cartItems.length > 0 ? false : true
       this.totalPrice = this.priceCalculation().totalPrice;
       this.discount = this.priceCalculation().discount;
    }
  }
  decreaseQuantity(itemDetails: any) {
   this.cartItems.forEach(element => {
      if(element.id === itemDetails.id) {
        if (element.quantity === 1) {
          this.removeItem(itemDetails);
        } else {
        element.quantity -= 1;
        }
      }
   });
   this.updateCartInStorage(this.cartItems);
   this.totalPrice = this.priceCalculation().totalPrice;
   this.discount = this.priceCalculation().discount;
  }
  increaseQuantity(itemDetails: any) {
    this.cartItems.forEach(element => {
      if(element.id === itemDetails.id) {
        element.quantity += 1;
      }
   });
   this.updateCartInStorage(this.cartItems);
   this.totalPrice = this.priceCalculation().totalPrice;
   this.discount = this.priceCalculation().discount;
  }

  priceCalculation() {
    let totalPrice = 0;
    let discount = 0;
    this.cartItems.forEach(element => {
      totalPrice += element.price*element.quantity;
      discount += element.discount*element.quantity
    })
    return { totalPrice, discount };
  }
  removeItem(itemDetails: any){
   this.cartItems = this.cartItems.filter(element => { 
    return element.id !== itemDetails.id
   })
   if(this.cartItems.length > 0) {
   this.totalPrice = this.priceCalculation().totalPrice;
   this.discount = this.priceCalculation().discount;
   } else {
    this.totalPrice = 0;
    this.discount = 0;
    this.noItemInCart = true;
   }
   this.updateCartInStorage(this.cartItems);
  }
  updateCartInStorage(cartItems) {
    if(typeof window !== 'undefined' && localStorage) {
      localStorage.setItem("Cart", JSON.stringify(cartItems))
    }
  }
}
