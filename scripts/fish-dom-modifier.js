// build the html of all the fish, and insert it into the dom
import { lookupFish } from './dataProvider.js'
import { fishHTMLCreator } from './fish-html-creator.js'




export const fishDomModifier = () => {
  const contentElement = document.querySelector(".left--container")
  
  const allTheFish = lookupFish()

  let allFishHTML = ""
  for (const fish of allTheFish) {
    allFishHTML += fishHTMLCreator(fish)
  }

  contentElement.innerHTML +=`
  <article class="fishes">
    ${allFishHTML}
  </article>
  `
}


      