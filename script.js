function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task");return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = task;

    span.onclick = function() {
        li.classList.toggle("done");
    };
    
   let deleteBtn = document.createElement("button");
   deleteBtn.textContent = "X";

  deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);


    document.getElementById("taskList").appendChild(li);
    input.value = "";
}