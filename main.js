const { createMarble } = require("./marbleMaker.js")
const { weaveBag } = require("./bagMaker.js")

const marble = createMarble("large")
console.log(marble)

const bag = weaveBag("gold")
console.log(bag)