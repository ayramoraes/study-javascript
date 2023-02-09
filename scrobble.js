// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10


function letterValue(word) {

    if (typeof word != 'string') {
        return -1
    }

    let score = 0;

        // for (let letter of word) {
        //     switch (letter.toLowerCase()) {
        // }

    for (let i = 0; i < word.length; i++) {


        switch (word[i].toLowerCase()) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "l":
            case "n":
            case "r":
            case "s":
            case "t":
                score += 1;
                break;
            case "d":
            case "g":
                score += 2;
                break;
            case "b":
            case "c":
            case "m":
            case "p":
                score += 3;
                break;
            case "f":
            case "h":
            case "v":
            case "w":
            case "y":
                score += 4;
                break;
            case "k":
                score += 5;
                break;
            case "j":
            case "x":
                score += 8;
                break;
            case "q":
            case "z":
                score += 10;
                break;
            default:
                break;
        }
    }
    return score;
}
console.log(letterValue("aY-ra"))