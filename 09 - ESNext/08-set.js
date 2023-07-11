// nao aceita repeticao: estrututra de conjunto

const times = new Set(); 
times.add('Vasco')  
times.add("Sao paulo").add("palmeiras").add("Corinthians")
times.add("Flamengo")
times.add("Vasco") 

console.log(times)