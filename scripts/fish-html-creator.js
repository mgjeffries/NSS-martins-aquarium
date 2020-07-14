// export a function for creating an html representation of a fish
export const fishHTMLCreator = (fish) => {
  return `
  <section class="fish card">
    <div ><img class="fish__image image--card" src="${fish.image}" alt="fish_img"></div>
    <div class="fishname">${fish.name}</div>
    <div class="fish__species">${fish.species}</div>
    <div class="fish__length">${fish.length}</div>
    <div class="fish__location">${fish.location}</div>
    <div class="fish__diet">${fish.food}</div>
  </section>
  `
}