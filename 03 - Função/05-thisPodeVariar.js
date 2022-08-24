/**
 * ! (this) -> Referenciar um objecto 
 */ 
const Pessoa = {
    nome: "Alexandre", 
    sobrenome: "Amado", 

    obterInformacao() {
        console.log(this.nome, this.sobrenome)
    }
} 

Pessoa.obterInformacao(); 
