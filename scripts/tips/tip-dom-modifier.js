import { tipLookup } from './tipDataProvider.js'
import { tipHTMLcreator } from './tip-html-creator.js'


// export function for adding tips to the dom
export const tipDOMModifier = () => {
  // get the element in the dom to modify
  const contentElement = document.querySelector(".right--container")
  // get the tips object from the data store
  const allTips = tipLookup()
  let alltipsHTML = allTips.map( tip => tipHTMLcreator(tip) ).join("")
  // modify the dom
  contentElement.innerHTML += `
  <aside class="tips">
    ${alltipsHTML}
  </aside>
  `
}