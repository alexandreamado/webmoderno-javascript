// setTimeout(() => {
//   console.log("Ela executou depois de 3 segundos!!!");

//   setTimeout(() => {
//     console.log("executando de novo!!!");

//     setTimeout(() => {
//       console.log("executando de novo!!!");
//     }, 1000);
//   }, 3000);
// }, 3000);


function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Executando promese')
      resolve()
    }, tempo)
  })
}

esperarPor()
  .then(() => esperarPor())
  .then(esperarPor)