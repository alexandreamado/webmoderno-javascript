//function declaration 

console.log(soma(10, 10))
function soma(x, y) {
    return x + y
} 

//function expression 
const sub = function(x, y) {
    return x - y
} 

//named function expression 
const dry = function dry(){
    return console.log("Ola mundo")
} 

dry()