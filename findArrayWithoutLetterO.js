/* vc vai criar uma função que vai receber um array com nomes de pessoas, por exemplo ["Ayra", "Joao", "Pedro"]
essa função vai te retornar um array igual mas sem os nomes que terminam com a letra O
exemplos:

yourFunction(["Ayra", "Joao", "Pedro"]) = ["Ayra"]

yourFunction(["Carlos", "Marcio", "Antonio", "Jessica"]) = ["Carlos", "Jessica"] */



function getNamesFinishingWithO(namesArray) {
    let chosenNames = []
    for (let name of namesArray) {
        if (!name.endsWith('o') && !name.endsWith('O')) {
            chosenNames.push(name)
            
        }
    }
    return chosenNames
}

console.log(getNamesFinishingWithO(["Ayra", "Joao", "PEDRO"]))