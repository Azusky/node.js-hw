
const dataTemp = require('./temperatures.json')
const {add ,sub,mul,div} = require('./math.js')
const {isNumber} = require('./types')

const temp = dataTemp.Chisinau
let nanValue = 0
let sumTemp = 0
let numTemp = 0

for (let i = 0; i < temp.length; i++) {
    let element = temp[i]
    if(isNumber(element)){
        sumTemp = add(sumTemp, element)
        numTemp = add(numTemp,1)
    }
    else{
        nanValue = add(nanValue,1)
    }
}
let avgTemp =div(sumTemp, numTemp)
let calError = div(mul(nanValue,100),temp.length)

console.log(`AvgTemp: ${avgTemp} (~${calError}%)`)
