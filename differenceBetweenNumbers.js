// função vai receber dois números e vai retornar o maior menos o menor deles. Vai ser a diferença

function differenceBetweenNumbers(number1, number2) {
   let sum = 0
    if(number1 < number2){
    sum = number2 - number1
    } else {
        sum = number1 - number2
    }
    
    return sum
}
console.log(differenceBetweenNumbers(25,22))