/**
 * Exibe cada palavra do array de forma reversa.
 * @param {string[]} palavras
 * @returns {void}
 */
function exibirPalavrasReverso(palavras) {
  for (let i = palavras.length - 1; i >= 0; i--) {
    console.log(palavras[i]);
  }
}

exibirPalavrasReverso([
  "Senac",
  "Programaçao",
  "código",
  "javascript",
  "React-Native",
]);
