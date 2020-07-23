import { lookupLocations } from './locationsDataProvider.js'
import { locationHTMLCreator } from './locations-html-creator.js'

// export function to modify the DOM
export const locationsDOMModifier = () => {
  
  // get the element to modify
  const contentElement = document.querySelector(".left--container")
  
  // get the locations object
  const alllocations = lookupLocations()
  
  // create the html for the location cards
  let allLocationsHTML = alllocations.map( location => locationHTMLCreator(location)).join("")

  // write the html to the dom
  contentElement.innerHTML += `
  <article class="locations">
    ${allLocationsHTML}
  </article>
  `

}