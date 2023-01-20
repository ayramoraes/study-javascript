function buyTicket(age, escort) {

    const greenTicket = {
        value: 7.50,
        color: "green"
    }
    const yellowTicket = {
        value: 8.60,
        color: "yellow"
    }
    const blueTicket = {
        value: 5.50,
        color: "blue"
    }
    const invalidTicket = {
        value: -99,
        color: "Invalid"
    }

    if (age < 5) {
        if (escort == true) {
            return blueTicket
        } else {
            return invalidTicket
        }
    }

    if (age >= 5 && age < 8) {
        return blueTicket
    }

    if (age >= 8 && age < 12) {
        if (escort == true) {
            return greenTicket
        } else {
            blueTicket
        }
    }

    if (age >= 12 && age < 18) {
        return greenTicket
    }

    return yellowTicket
}


let myTicket = buyTicket(2, true)

console.log(myTicket)

//console.log(`The value of the ticket is ${myTicket.value}€ and the color is ${myTicket.color}`)

