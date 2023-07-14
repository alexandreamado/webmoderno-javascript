function gerarNumeroAleatorio(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max];
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      const factor = max - min + 1;
      const aleatorio = parseInt(Math.random() * factor) + min;
      resolve(aleatorio);
      
    }, tempo)
  });
}

function gerarvariosNumeros() {
  return Promise.all([
    gerarNumeroAleatorio(1, 60, 1000),
    gerarNumeroAleatorio(1, 60, 500),
    gerarNumeroAleatorio(1, 60, 5000),
    gerarNumeroAleatorio(1, 60, 2000),
    gerarNumeroAleatorio(1, 60, 1200),
  ])
}  

console.time('promise')
gerarvariosNumeros()
  .then(console.log)
  .then(() => {
    console.timeLog('promise')
  })
