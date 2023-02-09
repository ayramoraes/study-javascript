// função que vai retornar o maior número dos arrays
// Comparar o primeiro elemento do array com a variavel maior. 

// Se o elemento foi maior que o maior, ele substitui o elemento 

function findLargestNumber(arrayNumber) {

  let largest = arrayNumber[0]

  // for (let i = 1; i < arrayNumber.length; i++) {
  //   if (arrayNumber[i] > largest) {
  //     largest = arrayNumber[i];
  //   }
  // }


for (let element of arrayNumber) {
  if (element > largest) {
    largest = element
  }
}

  return largest;
}


console.log(findLargestNumber([5, 8, 10, 22]))
