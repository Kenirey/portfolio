const Decrease = document.getElementById("Decrease");
const Reset = document.getElementById("Reset");
const Increase = document.getElementById("Increase");
const label = document.getElementById("label");
const minusfive = document.getElementById("minusfive");
const plusfive = document.getElementById("plusfive");
let count = 0;

Increase.onclick = function(){
    count++;
    label.textContent = count;
}
Decrease.onclick = function(){
    count--;
    label.textContent = count;
}
Reset.onclick = function(){
    count = 0;
    label.textContent = count;
}
plusfive.onclick = function(){
    count+=5;
    label.textContent = count;
}
minusfive.onclick = function(){
    count-=5;
    label.textContent = count;
}