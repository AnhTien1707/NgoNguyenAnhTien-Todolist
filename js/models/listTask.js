function taskList() {
    //Property
    this.arr = [];
    this.arrComplete = [];
    //Method
    this.addTask = function (taskNew) {
        this.arr.push(taskNew);
    };
    this.addtaskCompleted = function (idtask) {
        var b = this.findLocation(idtask);
        var a = this.arr[b];
        this.arrComplete.push(a);
    }
    this.addTaskChange = function(idtask){
        var b = this.findLocationCompleted(idtask);
        var a = this.arrComplete[b];
        this.arr.push(a);
    }
    this.findLocation = function (idTask) {
        var index = -1;
        this.arr.forEach(function (id, i) {
            if (id.taskId === idTask) {
                index = i;
            }
        })
        return index;
    };
    this.findLocationCompleted = function (idTask) {
        var index = -1;
        this.arrComplete.forEach(function (id, i) {
            if (id.taskId === idTask) {
                index = i;
            }
        })
        return index;
    };
    this.removeTask = function (idTask) {
        var index = this.findLocation(idTask);
        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    }
    this.removeTaskCompleted = function (idTask) {
        var index = this.findLocationCompleted(idTask);
        if (index !== -1) {
            this.arrComplete.splice(index, 1);
        }
    }
};


