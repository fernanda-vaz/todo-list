const taskList = document.querySelector(".task-list");
const taskListCompleted = document.querySelector(".completed-list");

let counter = 0;

function newItem(item) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const customCheckbox = document.createElement("div");
  customCheckbox.classList.add("custom-checkbox");

  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.classList.add("input-checkbox");
  inputCheckbox.id = "checkbox-" + counter++;

  const labelCheckbox = document.createElement("label");
  labelCheckbox.setAttribute("for", inputCheckbox.id);

//   labelCheckbox.addEventListener("click", function (event) {
    
//   });

  const taskTitle = document.createElement("p");
  taskTitle.id = "task-title";
  taskTitle.innerText = item;
}
