
function getNamesFinishingWithO(namesArray) {
    let chosenNames = []
    for (let name of namesArray) {
        if (!name.endsWith('o') && !name.endsWith('O')) {
            chosenNames.push(name)
            
        }
    }
    return chosenNames
}

console.log(getNamesFinishingWithO(["Joaquina", "Joao", "PEDRO"]))