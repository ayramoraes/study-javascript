
// preciso receber um número e dizer qual é a letra correspondente - devolver como string

function encodeLetter(character) {

    const alphabet = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (typeof character != 'string') {
        return -1
    }
    let lowerCased = character.toLowerCase()

    let index = alphabet.indexOf(lowerCased)

    return index

}

function encodeString(name) {

    let result = [];
    for (let letter of name) {
        let letterCode = encodeLetter(letter)
        result.push(letterCode)

    }

    return result.join("-")
}

function decodeLetter(numberCode) {

    const alphabet = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let letter = alphabet[numberCode]

    return letter
}

function decodeString(codeString) {

    const numberArray = codeString.split("-")

    let decodeResult = [];
    for (let numberInString of numberArray) {
        let number = parseInt(numberInString)

        let letter = decodeLetter(number)

        decodeResult.push(letter)

    }
    return decodeResult.join("")

}
console.log(decodeString("1-25-18-1-1-13-15-18-1-5-19-0-1-13-5-18-9-3-15"))
