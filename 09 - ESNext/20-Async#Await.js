function gerarNumeroAleatorio(min, max, numerosProibidos) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve, reject) => {
    const factor = max - min + 1;
    const aleatorio = parseInt(Math.random() * factor) + min;
    if (numerosProibidos.includes(aleatorio)) {
      reject("Numero repetido");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(qtNumeros, tentativas = 1) {
  try {
    const numeros = [];
    for (let _ of Array(qtNumeros).fill()) {
      numeros.push(await gerarNumeroAleatorio(1, 60, numeros));
    }
    return numeros;
  } catch (e) {
    if (tentativas > 10) {
      throw "Deu erro!!!";
    } else {
      return gerarMegaSena(qtNumeros, tentativas + 1)
    }
  }
}

gerarMegaSena(100).then(console.log).catch(console.log);
