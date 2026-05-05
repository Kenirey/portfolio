
function checkGrade(grade) {
    if (grade >= 90) return "Excellent!";
    if (grade >=80) return "Good!";
    if (grade >=75) return "Passed";
    if(grade <75) return "Failed";
}



document.getElementById('checker').onclick = function(){
    let grades = Number(document.getElementById('grade').value);

        document.getElementById('result').textContent = checkGrade(grades);

}