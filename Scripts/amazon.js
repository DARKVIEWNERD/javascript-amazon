import {cart,addToCart}from '../data/cart.js'
import { products } from '../data/products.js';


let productHTML='';
products.forEach((product)=>{
  productHTML +=` 
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

           <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${product.getStarsUrl()}">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
           ${product.getPrice()}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          ${product.extraInfoHtml()}
          <div class="product-spacer"></div>

          <div class="added-to-cart js-add-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary
           js-add-to-cart" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div> 
    `;
    
});

function updatecartQuantity(){
  let cartquantity=0;
  cart.forEach((item)=>{
      
    cartquantity +=item.quantity;
  });
  document.querySelector('.js-quantity').innerHTML=cartquantity;
}
updatecartQuantity();
function timeoutID(productId){
  const visible= document.querySelector(`.js-add-to-cart-${productId}`);

     visible.classList.add('added-visible');
     const previousTimeoutId=messageID[productId];
     if(previousTimeoutId){
        clearTimeout(previousTimeoutId);
     }
     
     const timeoutID=setTimeout(() => {
       visible.classList.remove('added-visible');
    }, 2000);
      messageID[productId]=timeoutID;
}

document.querySelector('.js-product-grid').innerHTML=productHTML;

const messageID={};

document.querySelectorAll('.js-add-to-cart')
.forEach((button)=>{
  button.addEventListener('click',()=>{
    const {productId}=button.dataset;
    addToCart(productId); 
    updatecartQuantity();
    console.log(cart);
    timeoutID(productId);
  });
 
});