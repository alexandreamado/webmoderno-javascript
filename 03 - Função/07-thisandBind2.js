function Pessoa() {
    let idade = 0; 

    // const self = this
    setInterval(function () {
        idade++ 
        console.log(idade)
    }, 1000)
} 

new Pessoa