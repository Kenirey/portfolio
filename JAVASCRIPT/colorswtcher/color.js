document.getElementById("red").onclick = function(){
    document.body.style.backgroundColor = "red";
    document.getElementById("colorText").textContent = "Current color: Red"
}
document.getElementById("blue").onclick = function(){
    document.body.style.backgroundColor = "blue";
     document.getElementById("colorText").textContent = "Current color: Blue"
}
document.getElementById("green").onclick = function(){
    document.body.style.backgroundColor = "green";
     document.getElementById("colorText").textContent = "Current color: Green"
}
document.getElementById("yellow").onclick = function(){
    document.body.style.backgroundColor = "yellow";
     document.getElementById("colorText").textContent = "Current color: Yellow"
}


/*


<button onclick="changeColor('red')" id="red">Red</button>
<button onclick="changeColor('blue')" id="blue">Blue</button>
<button onclick="changeColor('green')" id="green">Green</button>
<button onclick="changeColor('yellow')" id="yellow">Yellow</button>

function changeColor(color) {
    document.body.style.backgroundColor = color; 
    document.getElementById("colorText").textContent = "Current color: " + color;
}

*/