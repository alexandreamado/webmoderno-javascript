function getPreco(impost = 0, moeda = "MT") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + impost)}`;
}

const produto = {
  nome: "Notebook",
  preco: 3000,
  desc: 0.25,
  getPreco,
};
globalThis.preco = 20;
global.desc = 0.1;

console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 49990, desc: 0.2 };
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));
