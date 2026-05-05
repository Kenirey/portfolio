let submitbtn = document.getElementById("submitbtn")
let students = []

function tableRender(){
let tbody = document.getElementById('tbody')

tbody.innerHTML = students.map((student,btn)=>
`<tr>
    <td>${student.sNum}</td>
    <td>${student.sName}</td>
    <td>${student.sCourse}</td>
    <td>${student.sSection}</td>
    <td>${student.sGrade}</td>
    <td>${student.sGrade >= 75? "Passed":"Failed"}</td>
    <td><button onclick = "updatebtn(${btn})">Update</button></td>
    <td><button onclick = "deletebtn(${btn})">Delete</button></td>
    

</tr>`).join("")

}

submitbtn.addEventListener("click", function(){

    let studNum = Number(document.getElementById('studNum').value)
    let studName = document.getElementById('sName').value
    let studCourse = document.getElementById("sCourse").value
    let studSection = document.getElementById('sSection').value
    let studGrade = parseFloat(document.getElementById('sGrade').value)

    if (studName !== "" && studCourse !== "" && studSection !== "" && studName !== null && studCourse !== null && studSection !== null && !isNaN(studGrade,studNum)) {
        students.push({
            sNum: studNum,
            sName: studName, 
            sCourse: studCourse, 
            sSection: studSection,
            sGrade: studGrade
        })
        document.getElementById('studNum').value = ""
        document.getElementById('sName').value = ""
        document.getElementById('sCourse').value = ""
        document.getElementById('sSection').value = ""
        document.getElementById('sGrade').value = ""
        alert("Student info Added")
        console.log(students)
        tableRender()
        updateCards()
    }
    else{
        alert("Hoy d kapa tapos mag input")
    }

})

function updateCards(){
    let total = students.length
    let passed = students.filter(student => student.sGrade>=75).length
    let Failed = students.filter(student => student.sGrade<75).length

    document.getElementById('total').textContent = total
    document.getElementById('passed').textContent = passed
    document.getElementById('failed').textContent = Failed

    document.getElementById('totalpassed').textContent = total >0? `${((passed/total)*100).toFixed(1)}% of total` : "0%"
     document.getElementById('totalfailed').textContent = total >0? `${((Failed/total)*100).toFixed(1)}% of total` : "0%"
}


function deletebtn(index){

    students = students.filter((student,i)=>i!==index)
    tableRender()
    updateCards ()


}
function updatebtn(index){

    let newNum = prompt("Enter new Student Number: ", students[index].sNum)
    let newName =  prompt("Enter new Student Name: ", students[index].sName)
    let newCourse =  prompt("Enter new Student Course: ", students[index].sCourse)
    let newSection =  prompt("Enter new Student Section: ", students[index].sSection)
    let newGrade =  prompt("Enter new Student Name: ", students[index].sGrade)

    if (!isNaN(newNum) && !isNaN(newGrade) && newName !=="" && newSection !=="" && newCourse !==""  && newCourse !==null && newName !==null && newSection !==null) {
        students[index].sName = newName
        students[index].sNum = newNum
        students[index].sGrade =  parseFloat(newGrade)
        students[index].sSection = newSection
        students[index].sCourse = newCourse
        tableRender()
         updateCards ()
    }



}