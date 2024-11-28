/**
 * Gerencia um estoque de itens com atualização e contagem do esroque.
 * @returns {void}
 */
function gerenciarEstoque() {
  const estoque = ["Teclado", "Mouse Razer", "Monitor", "webcam"];
  estoque[1] = "Mouse Hyperx";
  console.log("Número total de itens no estoque:", estoque.length);
  console.log("Estoque atualizado:", estoque);
}

gerenciarEstoque();
