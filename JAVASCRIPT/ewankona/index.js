
/*function add(a,b){

     sum = a+b;
     console.log(sum);
}

add(5, 7);
*/


const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiply = document.querySelector("#multiply");
const division = document.querySelector("#division");


function getValues(){
    let fnum = parseFloat(document.querySelector("#fnum").value);
    let snum = parseFloat(document.querySelector("#snum").value);
    return [fnum, snum]; 
}
function displayResult(result){

    document.querySelector("#result").textContent = "Result: "+result;
}
addition.onclick = function(){

        let value = getValues();
        result = value[0] + value[1];
        displayResult(result);
}   
subtraction.onclick = function(){

    let value = getValues();
    result = value[0] - value[1];
    displayResult(result);
}
multiply.onclick = function(){

    let value = getValues();
    result = value[0] * value[1];
    displayResult(result);
}
division.onclick = function(){

    let value = getValues();
    result = value[0] / value[1];
    displayResult(result);
}
