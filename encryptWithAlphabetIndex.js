// uma função que recebe uma string e devolve a posição de todas as letras

function getAlphabetIndexOf(character) {

    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (typeof character != 'string') {
        return -1
    }
    let lowerCased = character.toLowerCase()

    let index = alphabet.indexOf(lowerCased) + 1

    if (index == 0) {
        return -1
    }

    return index

}

function encryptWhitAlphabetIndex(name) {

    let result = [];
    for (let letter of name) {
        let letterCode = getAlphabetIndexOf(letter)
        result.push(letterCode)
    } 
return result
}

console.log(encryptWhitAlphabetIndex("Ayra"))

// fazer o array ser retornado como string - fazer o join para retornar uma string - pequeno refactor para que ela trabalhe com espaço