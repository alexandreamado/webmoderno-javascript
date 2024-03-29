function gerarNumeroAleatorio(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    const factor = max - min + 1;
    const aleatorio = parseInt(Math.random() * factor) + min;
    resolve(aleatorio);
  });
}

gerarNumeroAleatorio(1, 60)
  .then((num) => num * 10)
  .then((numX10) => `O numero gerado foi ${numX10}`)
  .then(console.log);
