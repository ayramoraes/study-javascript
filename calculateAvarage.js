
// receber um array de números e devolvo a média

// preciso receber uma quantidade (que eu não sei qual vai ser) de números e dividir pela soma desses números
'use strict';

function calculateAverage(arrayNumbers) { // função que recebe o Array

    let sum = 0 // variavel vazia para acumular valores
    for (let number of  arrayNumbers) { 
        sum += number; 
    }
    return sum / arrayNumbers.length;
}
console.log(
    calculateAverage(
        [4, 8, 5, 6, 1]
    )
)