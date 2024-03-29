function real(partes, ...valores) {
  const resultado = []
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `MT${valor.toFixed(2)}`
    resultado.push(partes[indice], valor)
  }) 
  return resultado.join('')
} 

const preco = 29.9;
const precoParcela = 11; 
console.log(real `1px de ${preco} ou 3x de ${precoParcela}`)