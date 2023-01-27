
function giveNames(number1, name1, name2) {

    if (isNaN(number1)) {
        return "Invalid"
    }
    if (typeof name1 != 'string') {
        return "Invalid"
    }
    if (typeof name2 != 'string') {
        return "Invalid"
    }

    if (number1 < 10) {
        return name1.toUpperCase()
    }
    if (number1 > 20) {
        return name1.toLowerCase() + " " + name2.toLowerCase()
    }

    return name2.toUpperCase()
    
}
console.log(giveNames(3, 3, "bolinha"))

