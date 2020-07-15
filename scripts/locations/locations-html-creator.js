export const locationHTMLCreator = (location) => {
  return `
  <section class="location card">
    <div ><img class="location__image image--card" src="${location.image}" alt="${location.imageAlt}"></div>
    <div class="location__name">${location.name}</div>
    <div class="location__rating">${location.rating}</div>
  </section>
  `
}