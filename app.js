function addTask(){
    const newTask = document.createElement('li')
    const taskList = document.getElementById('task-List')
    taskList.appendChild(newTask)
    newTask.textContent = document.getElementById('inputTask').value
    document.getElementById('inputTask').value  = ""
    deleteTask(newTask)
}
function deleteTask(newTask){
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    newTask.appendChild(deleteBtn)
    deleteBtn.onclick = function(){
        newTask.remove()
    }
}