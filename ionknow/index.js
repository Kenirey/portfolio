let submitbtn = document.getElementById('submitbtn')
let info = document.getElementById('info')
let students = []


function renderSinfo(){

info.innerHTML = students.map((student,index/* for button? */)=>
    `<p> Student name: ${student.sName} Student Grade: ${student.sGrade} ${student.sGrade >=74.50? "Passed!":"Failed"}
    <button onclick ="deleteinfo(${index})"> Delete</button> </p>`
).join("")


}

submitbtn.addEventListener("click",function(){
    let sName = document.getElementById('sName').value
    let sGrade = parseFloat(document.getElementById('sGrade').value)
    
    if (sName !== "" &&  !isNaN(sGrade)) {
        students.push(
            {sName, sGrade}
        )
        document.getElementById('sName').value = ""
        document.getElementById('sGrade').value = ""
        console.log(students)
        alert("Student info added")
    }
    else{
        alert("Please Fill up the requirments!")
    }

renderSinfo()
})
function deleteinfo(index){
    students = students.filter((student, i) => i !== index)
    renderSinfo()
  }