// vou criar uma função que recebe dois números, vou retornar as somas desses números se essa soma for maior do que 10, senão retorna 0

function sum10(number1, number2) {
    let sum = number1 + number2
    if (sum <= 10) {
        return 0
    }
    return sum
}
console.log(sum10(7, 3))

