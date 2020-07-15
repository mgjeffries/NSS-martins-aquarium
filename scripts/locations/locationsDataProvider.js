const locationsCollection = [
  {
    name: "pacific ocean",
    rating: "4.5 stars",
    image: "./images/pacificOcean.png",
    imageAlt: "pacific ocean screen clipping",
  },
  {
    name: "atlantic ocean",
    rating: "3.3 stars",
    image: "./images/atlanticOcean.png",
    imageAlt: "atlantic ocean screen clipping",
  }
]

export const lookupLocations = () => locationsCollection.slice();