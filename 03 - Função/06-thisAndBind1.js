const pessoa = {
    saudacao: 'bom dia',
    falar(){
        console.log(this.saudacao)
    }
} 

pessoa.falar() 
const falar = pessoa.falar()

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa() 