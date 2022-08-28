//Closure é o espaco criado quando a funçao é declarada
//Esse escopo permite a funçao acessar e manipular variavies externas a funcao 

//Contecto lexico em accao 

const x = "Global"

function fora() {
    const x = "local"
    function dentro() {
        return x
    } 
    return dentro
} 

const minhaFuncao = fora()
console.log(minhaFuncao())