// build the html of all the fish, and insert it into the dom
import { lookupFish } from './dataProvider.js'
import { fishHTMLCreator } from './fish-html-creator.js'

// export function for modifying the DOM
export const fishDomModifier = () => {
  // get the element to modify
  const contentElement = document.querySelector(".left--container")
  // get the object containing the fish data
  const allTheFish = lookupFish()
  // create the html for all the fish cards
  let allFishHTML = allTheFish.map( fish => fishHTMLCreator(fish) ).join("")

  // modify the DOM
  contentElement.innerHTML +=`
  <article class="fishes">
    ${allFishHTML}
  </article>
  `
}


      