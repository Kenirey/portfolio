
 let bmi =  0;
function computeBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    bmi = weight / (height * height);
    
}


document.getElementById("computeBtn").onclick = function() {
    computeBMI();
    document.getElementById("bmiResult").textContent = "BMI: " + bmi.toFixed(2);
    if(bmi < 18.5){
        document.getElementById("bmiCategory").textContent = "Underweight";
    }
    else if(bmi <25){
        document.getElementById("bmiCategory").textContent = "Normal";

    }
    else if(bmi <29.9){
        document.getElementById("bmiCategory").textContent = "Overweight";

    }
    else{
    
            document.getElementById("bmiCategory").textContent = "Obese";
    }
}

