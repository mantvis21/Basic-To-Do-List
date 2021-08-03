// Kintamieji

var addBtn = document.querySelector("#todo-form button");
var toDo = document.getElementById("todos");
var done = document.getElementById("dones");
var task = document.querySelector("#todo-form input");


// mygtuko kurimo funkcija

function newBtn(name, className) {
    var btn = document.createElement("button");
    btn.innerHTML = name;
    btn.classList.add("btn", "btn-" + className);
    return btn;
}

// add mygtuko eventas

addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (task.value != "") {

        var addTask = task.value;

        // sukuriam nauja div

        var taskDiv = document.createElement("div");
        var taskHeader = document.createElement("h3");
        taskHeader.innerHTML = addTask;
        taskDiv.classList.add("taskStyle");
        taskDiv.appendChild(taskHeader);
        toDo.appendChild(taskDiv);

        // pridedam trinti ir perkelti mygtukus

        var delBtn = newBtn("Delete", "danger");
        taskDiv.appendChild(delBtn);

        var moveToDoneBtn = newBtn("Move to Done", "success");
        taskDiv.appendChild(moveToDoneBtn);

        task.classList.remove("invalid-task");
        task.value = "";

    } else {
        task.classList.add("invalid-task");

    }

})

// ToDo skiltis

var divIndex;
var divIndex2;


toDo.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-danger")) {
        divIndex = e.target.closest("div");
        divIndex.remove();
    } else if (e.target.classList.contains("btn-success")) {
        e.target.innerText = "Move back";
        divIndex2 = e.target.closest("div");
        done.appendChild(divIndex2);
    }
})



// done skiltis

done.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-danger")) {
        divIndex = e.target.closest("div");
        divIndex.remove();
    } else if (e.target.classList.contains("btn-success")) {
        e.target.innerText = "Move to Done";
        divIndex2 = e.target.closest("div");
        toDo.appendChild(divIndex2);
    }
})

