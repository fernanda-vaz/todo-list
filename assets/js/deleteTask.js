const deleteTask = (item) => {
  if (confirm("Tem certeza que deseja excluir esta tarefa?")) {
    item.remove();
  }
};

export { deleteTask };
