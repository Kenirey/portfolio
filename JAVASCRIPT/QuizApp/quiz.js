let correctAnswer = "Tokyo";
let score = 0;

let choices = document.querySelectorAll(".choice");

choices.forEach(function(button) {
    button.onclick = function() {
        if (button.textContent === correctAnswer) {
            score++;
            document.getElementById("score").textContent = "Score : " + score;
            document.getElementById("result").textContent = "Correct Answer!";
            document.getElementById("result").style.color = "green";
        } else {
            if(score > 0) score--;
            document.getElementById("score").textContent = "Score : " + score;
            document.getElementById("result").textContent = "Incorrect Answer!";
            document.getElementById("result").style.color = "red";
        }
    }
});