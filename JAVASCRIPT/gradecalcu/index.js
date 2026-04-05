

/*let computeBtn = document.getElementById("computeBtn");

computeBtn.onclick = function(){
    let grade1 = parseFloat(document.getElementById("grade1").value);
    let grade2 = parseFloat(document.getElementById("grade2").value);
    let grade3 = parseFloat(document.getElementById("grade3").value);
    let avg = (grade1 + grade2 + grade3)/3;
    document.getElementById("average").textContent = "Average: " + avg;

    if(avg >= 75){  
        document.getElementById("result").textContent = "PASSED";
    }
    else {
        document.getElementById("result").textContent = "FAILED";
    }
}
    */
let computeBtn = document.getElementById("computeBtn");

computeBtn.onclick = function(){
    
let grade1 = parseFloat(document.getElementById("grade1").value);
let grade2 = parseFloat(document.getElementById("grade2").value);
let grade3 = parseFloat(document.getElementById("grade3").value);

    let grade = [grade1, grade2, grade3];
    let sum = 0;


    for (let index = 0; index < grade.length; index++) {
            
            sum += grade[index];

    }
    avg = sum/grade.length;

    document.getElementById("average").textContent = "Average: " + avg;

    if(avg >= 75){  
        document.getElementById("result").textContent = "PASSED";
    }
    else {
        document.getElementById("result").textContent = "FAILED";
    }
}
 