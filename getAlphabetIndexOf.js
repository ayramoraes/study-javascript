/* função que vai receber um caracter, essa função vai retornar qual é a posição que a letra está no alfabeto */

function getAlphabetIndexOf(character1) {

    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        return alphabet.indexOf(character1.toLowerCase()) + 1
   
}    
console.log(getAlphabetIndexOf("A"))