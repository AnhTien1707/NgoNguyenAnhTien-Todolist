function getEle(id) {
    return document.getElementById(id);
}

var taskLt = new taskList();
var validation = new Validation();
getLocalStorage();
function getTask() {
    let val = getEle("newTask").value;
    let Id = Math.floor(Math.random() * 100);
    //Validation
    var isValid = true;
    isValid = validation.CheckValid(val,"notiInput" , "Vui Lòng Không Được Để Trống!")
    && validation.checkDuplicate(val,"notiInput","Task Đã Tồn Tại" , taskLt.arr ) && 
    validation.checkDuplicateComple(val , "notiInput" , "Task Completed Đã Tồn Tại" , taskLt.arrComplete);
    if(!isValid) return null;
    
    var taskNew = new task(Id, val, "todo");
    return taskNew;
}



getEle("addItem").addEventListener('click', function () {
    
    var taskNew = getTask();
    if(taskNew){
    taskLt.addTask(taskNew);
    setLocalStorage();
    renderTask(taskLt.arr);
    }
    getEle("newTask").value = '';
})

function renderTask(data) {
    
    var contentHTML = ""
        data.forEach(function(items , index){
            contentHTML += `<li>
            <span>${items.taskName}</span>
            <div class="buttons">
                <button class="remove" data-index="${index}" data-status="${items.status}" onclick = "deleteTask(${items.taskId})">
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="complete" data-index="${index}" data-status="${items.status}" onclick = "changeTask(${items.taskId})">
                    <i class="far fa-check-circle"></i>
                    <i class="fas fa-check-circle"></i>
                </button>
            </div>
        </li>`
        }) 
     getEle("todo").innerHTML = contentHTML;
}

function renderCompleted(data) {
    var contentHTML = ""
        data.forEach(function(items , index){
            contentHTML += `<li>
            <span>${items.taskName}</span>
            <div class="buttons">
                <button class="remove" data-index="${index}" data-status="${items.status}" onclick = "deleteTaskCompleted(${items.taskId})">
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="complete" data-index="${index}" data-status="${items.status}" onclick = "changeTaskCompleted(${items.taskId})">
                    <i class="far fa-check-circle"></i>
                    <i class="fas fa-check-circle"></i>
                </button>
            </div>
        </li>`
        }) 
        getEle("completed").innerHTML = contentHTML;
}


function deleteTask(Idtask){
    taskLt.removeTask(Idtask);
    renderTask(taskLt.arr);
    setLocalStorage();
    console.log(taskLt.arr);
}

function deleteTaskCompleted(Idtask){
    taskLt.removeTaskCompleted(Idtask);
    renderCompleted(taskLt.arrComplete);
    setLocalStorage();
    console.log(taskLt.arrComplete);
}

function changeTask(idTask){
    taskLt.addtaskCompleted(idTask);
    renderCompleted(taskLt.arrComplete);
    taskLt.removeTask(idTask);
    renderTask(taskLt.arr);
}

function changeTaskCompleted(idTask){
    taskLt.addTaskChange(idTask);
    renderTask(taskLt.arr);
    taskLt.removeTaskCompleted(idTask);
    renderCompleted(taskLt.arrComplete);
}



function setLocalStorage(){
    var dataString = JSON.stringify(taskLt.arr)
    localStorage.setItem("taskList" , dataString);
}
function getLocalStorage(){
    var dataString = localStorage.getItem("taskList");
    var dataJSON = JSON.parse(dataString);
    taskLt.arr = dataJSON ;
    renderTask(taskLt.arr);
    
}

