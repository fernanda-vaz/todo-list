export const editTask = (item) => {
  let newTask = prompt("Digite a nova tarefa:");

  if (newTask !== null && newTask.trim() !== "") {
    const updatedTask = item.querySelector("#task-title");
    updatedTask.textContent = newTask;

    const completed = item.querySelector(".input-checkbox").checked;

    if (completed) {
      item.querySelector(".input-checkbox").checked = true;
      item.querySelector(".custom-checkbox").classList.add("done");
      updatedTask.style.textDecoration = "line-through";
    }
  }
};
