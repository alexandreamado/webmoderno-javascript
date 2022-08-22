//Função em JS e First-Class Object (Citizens)
// Higher-Order function

//funçao de forma literal
function fun1() {}

//armazenar um funcao em uma variavel
const fun2 = function () {};

//armazernar uma funcao em um array
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];

console.log(array[0](2, 3));

//armazenando em um atributo de objecto
const obj = {};
obj.falar = function () {
  return "ola";
};
console.log(obj.falar());

//como passar uma funcao como paramentro 
function run(fun) {
    fun()
} 

run(function() {console.log('Executando...')}) 

//uma funcao pode retornar/conter uma funcao 
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
} 

soma(2, 3)(2)