const marcas = ['mercede', 'audi', 'toyota'] 

const imprimirResultado = function(nome, indice) {
    console.log(`${indice + 1}.`,nome)
} 

marcas.forEach(imprimirResultado) 

// const imprimirMarcas = (nome, indice) => marcas.forEach(imprimirMarcas)
marcas.forEach(item => console.log(item))