import { formatCurrency } from "../Scripts/utils/currency.js"; 

export function moneyTest(){ 
if (formatCurrency(2000.5) === "20.01") {
  return true;
} else {
  return false;
}
};
moneyTest();
console.log(moneyTest());