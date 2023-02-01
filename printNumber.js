// criar uma função chamada printNumbers()
// parametros de entrada: um numero
// parametros de saida: nenhum
// regras:
// deve imprimir no console todos os numeros de 1 ate o number que foi recebido

function printNumbers(number) {
 
    for (let i = 1; i <= number; i++) { 
      console.log(i);
    }
  }
// A expressão 1 define uma variável antes do início do loop (i=1) 
// A expressão 2 define a condição para a execução do loop (i deve ser menor que number). 
// A expressão 3 aumenta um valor (i++) cada vez que o bloco de código no loop é executado.   


function printNumbersIn4(totalNumbers) {
  
  for (let i = 1; i <= totalNumbers; i++) { 
    console.log(i%5);
  }
  
}
printNumbersIn4(10)