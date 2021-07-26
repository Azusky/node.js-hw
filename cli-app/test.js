const Food = require('./food/Food')
const {save, load} = require('./persistance')

// save( new Food("July",100),'./persistance/data/food.json')
let data = load('./persistance/data/food.json')
console.log(data)
