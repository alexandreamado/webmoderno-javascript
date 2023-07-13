const primeiraElemento = (array) => array[0];
const primeiraLetra = (string) => string[0];
const letraMinuscula = (letra) => letra.toLowerCase();

new Promise(function (resolve) {
  resolve(["Alexandre", "Inacio", "Amado", "Ofelia", "Steven", "Gremo"]);
})
  .then(primeiraElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(console.log);
