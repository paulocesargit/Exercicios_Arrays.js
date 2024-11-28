/**
 * Gerencia uma lista de tarefas de adicionar e remover itens.
 * @returns {void}
 */
function gerenciarTarefas() {
  const tarefas = [];
  tarefas.push("Programar");
  tarefas.push("Estudar JavaScript");
  tarefas.push("Ir ao Senac");
  tarefas.pop();
  console.log("Lista final de tarefas:", tarefas);
}

gerenciarTarefas();
