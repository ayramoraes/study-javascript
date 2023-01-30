/* função que vai receber um caracter, essa função vai retornar qual é a posição que a letra está no alfabeto */

function encodeLetter(character) {

    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    if (typeof character != 'string') {
        return -1
    }
    let lowerCased = character.toLowerCase()
     
    let index = alphabet.indexOf(lowerCased) + 1

   // para substituir todo o resto: return (index == 0) ? -1 : index
 

    if (index == 0) {
        return -1
    }

    return index
   
}    
console.log(encodeLetter("A"))