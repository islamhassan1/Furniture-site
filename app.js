const cartBtn = document.querySelector('.icon');
const closeCart = document.querySelector('.close-cart');
const clearCart = document.querySelector('.clear-cart');
const cartDom = document.querySelector('.cart');
const cartOverlay= document.querySelector('.car-overlay');
const cartZero= document.querySelector('.zero');
const cartTotal= document.querySelector('.cart-total');
const cartContent= document.querySelector('.cart-content');
const productsDom= document.querySelector('.section-products-center');

//////////////// 
///cart
let cart = [];

//geting the products
class products{
  async getProducts(){
      try {
        let result= await fetch('products.json');
        let data =await result.json();
        return data;
      }catch(error){
         console.log(error);
      } 
  }
}

///display products
class UI{

}

////local storage
class storage{

}

document.addEventListener("DOMContentLoaded",()=>{
    const ui = new UI ();
    const products = new products();
/////get all products
    products.getProducts().then(data=>console.log(data));
});