const searchTerm = "Collie"

dogs = [
    {
        type: "dog",
        kind: "Collie"
    },
    {
        type: "cat",
        kind: "cheshire"
    }
]


const favoriteDog = () => {
    for (const breed of dogs) {
        if (breed.kind === searchTerm) {

            return (`My Favorite Dog Breed is ${breed.kind}`)

        } else {

            return (`I like ${breed.type}s`)
        }
        
        
    }
    
 }

// const searc  h = favoriteDog()

// favoriteDog()

console.log(favoriteDog()) 