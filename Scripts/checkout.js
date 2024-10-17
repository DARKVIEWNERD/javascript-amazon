import { renderOrderHtml } from "./Checkout/orderSummaryCheckout.js";
import { renderpaymentSummary } from "./Checkout/paymentSummaryCheckout.js";
import { renderCheckoutHeader } from "./Checkout/checkoutHeader.js";  
import  '../data/cart-oop.js';
renderOrderHtml();
renderpaymentSummary();
renderCheckoutHeader();

