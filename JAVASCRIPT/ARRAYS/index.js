/*let food = ["adobo", "sinigang", "tinola","ice cream", "milk tea"];

for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
    
}
    */

/*
let fruit = ["mango", "grapes"];
fruit.push("mango");
console.log(fruit);
*/
let names = ["john", "peter", "thomas"];

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
   
 


let hasPeter = names.includes("peter");
document.getElementById("result1").textContent = "May peter ba? " + hasPeter;


let thomasIndex = names.indexOf("thomas");
document.getElementById("result2").textContent = "Index ni thomas: " + thomasIndex;

}


