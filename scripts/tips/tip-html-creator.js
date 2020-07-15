export const tipHTMLcreator = (tip) => {
  return `
  <section class="card">
    <div><img class="tips__img image--card" src="${tip.image}" alt="${tip.imageAlt}"></div>
    <div>${tip.quote}</div>
  </section>
  `
}