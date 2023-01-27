/* criar uma função
parametros de entrada: 3 - um numero e duas strings
retorna: uma string

regras:
se o numero for menor que 10: retorna a primeira string em caixa alta
se o numero for maior ou igual a 10 mas menor que 20: retorna a segunda string em caixa alta

se o numero for maior que 20: retorna uma string com as 2 strings separadas por um espaço, tudo em caixa baixa


exemplos/testes:

myFunc(5, "ayra", "moraes") == "AYRA" 
myFunc(12, "ayra", "moraes") == "MORAES" 
myFunc(33, "AYRA", "mOrAeS") == "ayra moraes" */

function giveNames(number1, name1, name2) {

    if (isNaN(number1)) {
        return "Invalid"
    }
    if (typeof name1 != 'string') {
        return "Invalid"
    }
    if (typeof name2 != 'string') {
        return "Invalid"
    }

    if (number1 < 10) {
        return name1.toUpperCase()
    }
    if (number1 > 20) {
        return name1.toLowerCase() + " " + name2.toLowerCase()
    }

    return name2.toUpperCase()
    
}
console.log(giveNames(3, 3, "bolinha"))

