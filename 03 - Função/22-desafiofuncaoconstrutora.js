function Desafio(nome){   
    this.nome = nome

    this.falar = function(){
        console.log(`Ola meu nome é: ${nome}`)
    }
} 

const d1 = new Desafio("Andre")
d1.falar() 

