let tasks = JSON.parse(localStorage.getItem("key")) || []
let addbtn = document.getElementById('addbtn')

addbtn.addEventListener("click", function(){

    let taskInput = document.getElementById('taskInput').value

    if(taskInput !=="" && taskInput !==null){
        tasks.push(
            {gawain: taskInput, done: false})

            localStorage.setItem("key", JSON.stringify(tasks))
            localStorage.getItem("key")
            JSON.parse(localStorage.getItem("key"))
            let result = JSON.parse(localStorage.getItem("key"))
        alert("Task Added")
        console.log(result)
        document.getElementById('taskInput').value = ""
        todoRender()
    }else{
        alert("Add task before submit it")
    }

})

function todoRender(){

    let todo = document.getElementById("todo")
    todo.innerHTML = tasks.map((task , index)=>`
    <div>
        
         <input type="checkbox" onclick = "toggleDone(${index})" ${task.done ? "checked" : ""}> 
         <span class="${task.done ? "done" : ""}">${task.gawain}</span>
        
        <button onclick="deletebtn(${index})">Delete</button>
   
    </div>
    
    `).join("")
}

function deletebtn(index){
    tasks = tasks.filter((task,i)=> i!==index)
    localStorage.setItem("key", JSON.stringify(tasks))
    todoRender()

}
function toggleDone(index){
    tasks[index].done = !tasks[index].done
    localStorage.setItem("key", JSON.stringify(tasks))
    todoRender()

}
todoRender()

