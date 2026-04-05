    /*let num = prompt("Enter a number: ");
    
    if(num %2 === 0){
        console.log(num +" is Even")
    }
    else{
        console.log(num + " is Odd")
    }
        */


let submit = document.getElementById("submit");

submit.onclick = function(){

    let grade1 =parseFloat( document.getElementById("grade1").value);
    let grade2 =parseFloat( document.getElementById("grade2").value);
    let grade3 =parseFloat( document.getElementById("grade3").value);
   
    let totalgrade = [grade1 , grade2, grade3];
    let sum = 0;    

    for(let i = 0; i< totalgrade.length; i++){
            sum += totalgrade[i];
    }
    avg = sum/totalgrade.length;

    document.getElementById("average").textContent = "Average : "+avg.toFixed(2);
    if (avg > 100 || avg < 0) {
        document.getElementById("result").textContent = "Invalid Input";
    }
    else if (avg == 100) {
        document.getElementById("result").textContent = "With Highest Honor!!!!";
    }
    else if (avg >= 95) {
        document.getElementById("result").textContent = "With High Honor!!!";
    }
    else if (avg >= 90) {
        document.getElementById("result").textContent = "With Honor";
    }
    else if (avg >= 75) {
        document.getElementById("result").textContent = "Passed";
    }
    else {
        document.getElementById("result").textContent = "Failed";
    }



}








