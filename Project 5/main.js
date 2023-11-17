const addtask = document.getElementById("add-task");
const inputtask = document.getElementById("input-task");
const taskcontainer = document.getElementById("task-container");

addtask.addEventListener("click", function () {

    let task = document.createElement("div");
    task.classList.add("task");

    let li = document.createElement("li");
    li.innerText = inputtask.value;
    task.appendChild(li);

    let checkbtn = document.createElement("button");
    checkbtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkbtn.classList.add("checktask");
    task.appendChild(checkbtn);

    let deletebtn = document.createElement("button");
    deletebtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deletebtn.classList.add("deletetask");
    task.appendChild(deletebtn);

    if (inputtask.value === '') {
        alert("Please Enter something");
    }
    else {
        taskcontainer.appendChild(task);
    }

    inputtask.value = '';

    checkbtn.addEventListener("click", function () {
        checkbtn.parentElement.style.textDecoration = 'line-through';
    });

    deletebtn.addEventListener('click', function (e) {

        // console.log(e.target);
        // let target = e.target;
        //用這個它的element有時候會跑掉
        //target.parentElement.parentElement.remove();
        deletebtn.parentNode.remove();
    })

});


