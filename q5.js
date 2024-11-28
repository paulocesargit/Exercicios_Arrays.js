/**
 * Jogo de adivinhação de um número entre 1 e 10.
 * O programa gera um número aleatório e tenta adivinhar automaticamente até acertar.
 * Exibe o número de tentativas feitas.
 * @returns {void}
 */

function jogoAdivinhacao() {
  const numero = Math.floor(Math.random() * 10) + 1;

  console.log(`O número gerado é: ${numero}`);

  let chute;
  let tentativas = 0;

  while (true) {
    chute = Math.floor(Math.random() * 10) + 1;
    tentativas++;

    console.log(`Tentativa ${tentativas}: Chute = ${chute}`);

    if (chute === numero) {
      console.log("Você acertou o número!!!");
      break;
    }

    console.log("Errou! Tentando novamente...");
  }

  console.log(`Número de tentativas: ${tentativas}`);
}

jogoAdivinhacao();
