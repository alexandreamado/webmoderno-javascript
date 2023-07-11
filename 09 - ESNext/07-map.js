const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true }) 


const chavesvariadas = new Map([

  [function () { }, "funcao"],
  [{}, 'Objecto'],
  [123, "Numero"]
]) 

chavesvariadas.forEach((vl, ch) => {
  console.log(ch, vl)
}) 

console.log(chavesvariadas.has(123))
chavesvariadas.delete(123)
console.log(chavesvariadas.has(123))
console.log(chavesvariadas.size) 

chavesvariadas.set(123, 'a')
chavesvariadas.set(123, 'b')
chavesvariadas.set(123, 'c') 
console.log(chavesvariadas)