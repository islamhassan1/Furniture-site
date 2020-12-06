//varibles

const cartBtn = document.querySelector('.icon');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.car-overlay');
const cartItems = document.querySelector('.zero');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.section-products-center');



//// cart
let cart = [];


//getting the products
class Products {
    async getProducts() {
        try {
            let result = await fetch('products.json')
            let data = await result.json();
            return data;
        }catch(error){
            console.log(error);
        }
    }
}

///display products
class UI{}

//local storge
class Storage{}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI()
    const products = new Products();


    //get all products
    products.getProducts().then(data => console.log(data));

});   