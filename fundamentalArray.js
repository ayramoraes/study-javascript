/* getFirst(myArray) => deve retornar o primeiro elemento do array

getLast(myArray) => deve retornar o ultimo elemento do array

getSize(myArray) => deve retornar a quantidade de elementos do array */

'use strict';

const friends = ["Joana", "Ciclana", "Beotrana", "Blabla", "Bleble", "Blibli", "Bloblo", "Blublu"]

function getFirst() {
    return friends[0]
}

console.log(getFirst(friends))

function getLast() {
    return friends[friends.length-1]
}
console.log(getLast(friends))

function getSize() {
    return friends.length
}
console.log(getSize(friends))