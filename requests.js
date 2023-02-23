const axios = require("axios").default

const url = "https://api.ipma.pt/public-data/forecast/aggregate/1131200.json"

axios.get(url)
  .then(function (response) {
    // handle success
    if (response.status == 200) {
        let data = response.data
        console.log(data[0]);
    } else {
        console.log(`deu ruim: ${response.data}`)
    }
  })