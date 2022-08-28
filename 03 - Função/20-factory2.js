function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  };
}

console.log(criarProduto("camera", 2000))
console.log(criarProduto("tablet", 20000))
console.log(criarProduto("Samsung A11", 12000))
