import { editTask } from "./editTask.js";
import { deleteTask } from "./deleteTask.js";

const taskList = document.querySelector(".task-list");
const taskListCompleted = document.querySelector(".completed-list");
const task = document.querySelector(".input-task");

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

  const taskTitle = document.createElement("p");
  taskTitle.id = "task-title";
  taskTitle.innerText = item;

  taskList.appendChild(taskItem);
  taskItem.appendChild(customCheckbox);
  customCheckbox.appendChild(inputCheckbox);
  customCheckbox.appendChild(labelCheckbox);
  labelCheckbox.appendChild(taskTitle);

  inputCheckbox.addEventListener("click", () => {
    if (inputCheckbox.checked) {
      customCheckbox.classList.add("done");
      taskListCompleted.appendChild(taskItem);
    } else {
      customCheckbox.classList.remove("done");
      taskList.appendChild(taskItem);
    }
  });

  const containerBtn = document.createElement("div");
  containerBtn.classList.add("button-container");

  const editBtn = document.createElement("button");
  editBtn.classList.add("action-button");

  const editImg = document.createElement("img");
  editImg.src = "../assets/imgs/edit.svg";
  editImg.alt = "Editar tarefa";

  editBtn.addEventListener("click", () => {
    editTask(taskItem);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("action-button");

  const deleteImg = document.createElement("img");
  deleteImg.src = "../assets/imgs/trash.svg";
  deleteImg.alt = "Excluir tarefa";

  deleteBtn.addEventListener("click", () => {
    deleteTask(taskItem);
  });

  taskItem.appendChild(containerBtn);
  containerBtn.appendChild(editBtn);
  editBtn.appendChild(editImg);

  containerBtn.appendChild(deleteBtn);
  deleteBtn.appendChild(deleteImg);

  localStorage.setItem("tasks", JSON.stringify(taskList));
  return taskItem;
}

function addNewTask(event) {
  event.preventDefault;

  if (task.value === "") {
    alert("Por favor, insira uma tarefa");
    return;
  }

  const taskItem = newItem(task.value);
  taskList.appendChild(taskItem);
  task.value = "";
  task.focus();
}

export { addNewTask };
