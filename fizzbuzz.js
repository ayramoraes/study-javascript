// criar uma função chamada fizzbuzz()
// parametros de entrada: um numero
// parametros de saida: nenhum
// regras:
// deve imprimir no console todos os numeros ate o number que foi recebido
// se o número for múltiplo de 3, não vai imprimir o número, vai escrever fizz
// se for múltiplo de 5 vai escrever buzz
// se for múltipo de 3 e 5 vai escrever fizbuzz

function isMultipleOf3(number) { return number % 3 == 0 }
function isMultipleOf5(number) { return number % 5 == 0 }

function fizzbuzz(number) {
    for (let i = 1; i <= number; i++) {

        if (isMultipleOf3(i) && isMultipleOf5(i)) {
            console.log("FizzBuzz")
        } else if (isMultipleOf5(i)) {
            console.log("Buzz")
        } else if (isMultipleOf3(i)) {
            console.log("Fizz")
        } else {
            console.log(i)
        }
    }
}
fizzbuzz(80)

