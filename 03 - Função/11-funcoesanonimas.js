const soma = function (x, y) {
    return x + y
} 

const imprimirResultado = function (a, b, operaco = soma) {
    console.log(operaco(a, b))
} 

imprimirResultado(2, 4)
imprimirResultado(2, 7, soma)
imprimirResultado(2, 7, function(x, y) {
    return x - y
})  

