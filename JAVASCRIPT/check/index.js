const subscribe = document.getElementById("subscribe");
const visabtn = document.getElementById("visabtn");
const masterbtn = document.getElementById("masterbtn");
const paypal = document.getElementById("paypal");
const result = document.getElementById("result");
const cardResult = document.getElementById("cardResult");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function(){

    if (subscribe.checked) {
        result.textContent = "You are Subscribe";
    }
    else{
        result.textContent = "You are NOT Subscribe";
    }
    if (visabtn.checked) {
        cardResult.textContent = "You pay on your Visa";
    }
   else if (masterbtn.checked) {
        cardResult.textContent = "You pay on your Master Card";
    }
    else if (paypal.checked) {
        cardResult.textContent = "You pay on your  Paypal";
    }

}