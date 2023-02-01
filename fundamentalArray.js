/* getFirst(myArray) => deve retornar o primeiro elemento do array

getLast(myArray) => deve retornar o ultimo elemento do array

getSize(myArray) => deve retornar a quantidade de elementos do array 

escrever no console e retornar um valor*/

'use strict';

const friends = ["Joana", "Ciclana", "Beotrana", "Blabla", "Bleble", "Blibli", "Bloblo", "Blublu"]

function getFirstOf(elementsArray) {

    let first = elementsArray[0]
    console.log(first)
    return first

}

function getLastOf(elementsArray) {
    let last = elementsArray[elementsArray.length - 1]  
    console.log(last)
    return last
}

function getSizeOf(elementsArray) {
    let size = elementsArray.length
    console.log(size)
    return size
}


let qualFriend = 2
console.log(friends[qualFriend])