class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Ola, meu nome é: ${this.nome}`);
  }
}

const p1 = new Pessoa("Alexandre");
p1.falar();

function criarPessoa(nome) {
  return {
    falar() {
      console.log(`Ola: ${nome}`);
    },
  };
}

const chamar = criarPessoa("Carlos");
chamar.falar();
