import { lookupFish } from './dataProvider.js'

const allTheFish = lookupFish()

for (const fish of allTheFish) {
  console.log(fish)
}