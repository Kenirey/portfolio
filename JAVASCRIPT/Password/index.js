let checker = document.getElementById("checker");

checker.onclick = function(){
    let pass = document.getElementById("pass").value;

    if(pass.length < 6){
        document.getElementById("result").textContent = "Weak";
    }
    else if(pass.length<10){
        document.getElementById("result").textContent = "Medium";
    }
    else{
        document.getElementById("result").textContent = "Strong! you can use that password now"
    }




}