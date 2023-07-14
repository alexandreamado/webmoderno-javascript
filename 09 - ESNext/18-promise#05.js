function funcioarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject("Ocorreu um erro");
    } else {
      resolve(valor);
    }
  });
}

funcioarOuNao("Testando...", 0.5)
  .then((v) => console.log(`Valor: ${v}`))
  .then(
    (v) => consol.log(v),
    (err) => console.log(`Erro Esp.: ${err}`)
  )
  .then(() => console.log("Quase Fim"))
  .catch((err) => console.log(`Erro: ${err}`))
  .then(() => console.log("fim"));
