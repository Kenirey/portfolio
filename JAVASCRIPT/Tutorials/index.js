


/*
ACCEPT USER INPUT
let username;
document.getElementById("mysubmit").onclick = function(){

    username = document.getElementById("MyInput").value;
    console.log(username);
}
*/

/*
Convertion
let age;
document.getElementById("mysubmit").onclick = function(){
    
   
    age = document.getElementById("Myage").value; 
    age = Number(age) ;
    age+=1;
    console.log(age, typeof age);
}
*/
/*
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the raduis of Circle");
radius = Number(radius);

circumference = 2 * PI *radius;

console.log(circumference);

*/
/*
const PI = 3.14159;
let radius;
let circumference;
document.getElementById("mysubmit").onclick = function(){
    
   
    radius = document.getElementById("radius").value; 
    radius = Number(radius);
    
    circumference = 2 * PI * radius;
    console.log(circumference);

    document.getElementById("myh3").textContent = circumference + " cm";
}
    */
/*
RANDOM MATH

let randomnum = Math.floor(Math.random()*6);
console.log(randomnum);
*/



/*
IF ELSE CONDITION

let age = 12;

if(age >= 18){
    console.log("Adult");
    document.getElementById("myAge").textContent = "You are an Adult";
}
else if(age >=13){
    console.log("Minor")
    document.getElementById("myAge").textContent = "You are a minor";
}
else if(age < 13){
    console.log("Kid")
    document.getElementById("myAge").textContent = "You are a Kid";
}
    */


function checkgrade(grade){
    if(grade >=90){
        return " Your grade is A " ;
    }
    else if(grade >=80){
        return " Your grade is B " ;
    }
    else if(grade >=70){
        return " Your grade is C " ;
    }
    else if(grade >=60){
        return " Your grade is D " ;
    }
    else if(grade <60){
        return " Your grade is F " ;
    }
}

let result = checkgrade(90);
document.getElementById("myGrade").textContent = result;