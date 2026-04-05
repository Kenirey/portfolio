let currentYear = new Date().getFullYear();
const Compute = document.getElementById("Compute")
Compute.onclick = function(){
    let birthYear = parseFloat(document.getElementById("birthYear").value);
    let age = currentYear - birthYear;
    document.getElementById("result").textContent = "you are "+age+" years old";

}