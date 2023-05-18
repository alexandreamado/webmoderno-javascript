/**
 * ! Funcao em JS e' FIRST-CLASS OBJECT (citizens)
 * ! Higher-order function
 */

//! criar em forma literal
function fun1() {}

//! Armazenar em uma variavel (funcao anonima)
const fun2 = function () {};

//!Armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
];
console.log(array[0](2, 3));

//! Armazenar em um atributo de objecto
const obj = {
  saudacao() {
    console.log("Ola mundo!");
  },
};
obj.saudacao();

// ! passar funcao como parametro 
function run(fun) {
    fun()
} 

run(function () { console.log('Executando...') }) 


//! Uma funcao pode retornar/conter uma funcao 
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
} 

soma(2, 3)(4)