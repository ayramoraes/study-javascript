function buyTicket(age, escort) {
         
    if (age < 5) {
        if (escort == true) {
            return 5.50
        } else {
            return -99
        }
    }

    if (age >= 5 && age < 8) {
        return 5.50
    }

    if (age >= 8 && age < 12) {
        if (escort == true){
            return 7.50
        } else {
            return 5.50
        }
    }

    if (age >= 12 && age < 18) {
        return 7.50
    }
    
    return 8.20
    
}
    
let myTicket = buyTicket(10, true)


console.log(`The value of the ticket is ${myTicket}€.`)