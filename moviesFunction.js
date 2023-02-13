const movies = [
    {
      "id": 123,
      "name": "Harry Potter",
      "year": 2011,
      "durationInMinutes": 177,
      "category": {
        "id": 1,
        "name": "Teen"
      },
      "tags": [
        {
          "id": 1,
          "name": "Fantasy"
        },
        {
          "id": 2,
          "name": "Adventure"
        }
      ],
      "available": true
    },
    {
      "id": 456,
      "name": "Pokemon",
      "year": 2002,
      "durationInMinutes": 144,
      "category": {
        "id": 0,
        "name": "Kids"
      },
      "tags": [
        {
          "id": 1,
          "name": "Fantasy"
        },
        {
          "id": 3,
          "name": "Animation"
        }
      ],
      "available": true
    },
    {
      "id": 765,
      "name": "Batman",
      "year": 1999,
      "durationInMinutes": 88,
      "category": {
        "id": 2,
        "name": "Teens"
      },
      "tags": [
        {
          "id": 2,
          "name": "Adventure"
        }
      ],
      "available": true
    },
    {
      "id": 456,
      "name": "Forrest Gump",
      "year": 1995,
      "durationInMinutes": 220,
      "category": {
        "id": 3,
        "name": "Youngs"
      },
      "tags": [
        {
          "id": 4,
          "name": "Drama"
        }
      ],
      "available": false
    },
    {
      "id": 45612,
      "name": "Harry Porra",
      "year": 2018,
      "durationInMinutes": 55,
      "category": {
        "id": 3,
        "name": "Adults"
      },
      "tags": [
        {
          "id": 5,
          "name": "Comedy"
        }
      ],
      "available": false
    }
  ]

// 1- a quantidade de filmes que estiverem disponiveis

function howManyMovies(movies) {
    let count = 0
    for (let movie of movies) {
        if (movie.available == true) {
            count += 1
        }
    }
    return count
}
    console.log(howManyMovies(movies))


// 2- retornar todos os filmes que a duração seja maior que x (x é um parametro para a função)
function getMovieLargestThan(number) {
    let largestMovies = []
     for (let movie of movies) {
         if (movie.durationInMinutes > number) {
             largestMovies.push(movie);
         }
     } return largestMovies
    
 }
 
 console.log(getMovieLargestThan(170))

// 3- retornar todos os filmes que tenham a tag com o id x (x é um parametro para a função)

function getMoviesByTag(number) {
    let targetMovies = []
     for (let movie of movies) {   
         for (let tag of movie.tags)  { 
             if (tag.id == number) {
                 targetMovies.push(movie);
             }
         } 
     }
     return targetMovies
 }


