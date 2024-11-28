/**
 * Calcula a média das notas de três alunos e exibe no console.
 * @returns {void}
 */
function calcularMediaAlunos() {
  const Paulo_cesar = [[5, 4, 10]];
  const Thiago = [[8, 10, 9]];
  const Roma = [[9, 4, 6]];

  Paulo_cesar.forEach((notas, index) => {
    const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
    console.log(`Média de Paulo-cesar = ${media}`);
  });

  Thiago.forEach((notas, index) => {
    const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
    console.log(`Média de Thiago = ${media}`);
  });

  Roma.forEach((notas, index) => {
    const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
    console.log(`Média de Roma = ${media}`);
  });
}

calcularMediaAlunos();
