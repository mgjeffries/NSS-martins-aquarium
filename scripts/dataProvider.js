const fishCollection = [
    {
      name: "Whally",
      species: "Whale",
      length: "Big",
      location: "The ocean",
      food: "krill",
      image: "./images/whale.png"
    }, 
    {
      name: "Other whale",
      species: "Whale",
      length: "Big",
      location: "The ocean",
      food: "krill",
      image: "./images/whale.png"
    }, 
    {
      name: "Sally the Sea Turtle",
      species: "kemp's ridley",
      length: "medium",
      location: "The ocean",
      food: "jelly fish",
      image: "images/sallySeaTurtle.jpg"
    }
]

export const lookupFish = () => {
  return fishCollection.slice()
}