let roastbtn = document.getElementById("roastbtn");

roastbtn.onclick = function(){
    let roasts = [
        "ang pangit mo!",
        "go home na!",
        "bakit ka pa nandito!",
        "obvious na obvious!",
        "sana ol may utak!"
    ];


    let name = document.getElementById("name").value;

    

    let random = Math.floor(Math.random() * roasts.length);
console.log(random);
document.getElementById("roast").textContent = name + " " + roasts[random];
    
}