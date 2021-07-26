
const fs = require('fs')
const dir = fs.readdirSync('./p')

// dir.forEach((fileName)=>{
//     if(!fileName.endsWith('.json')&& fileName != 'index.js'){

//         module.exports[fileName] = require('./'+ fileName)
//         // console.log(fileName)
//     }

// })

let fileName = dir.filter(fileName=> fileName != "index.js" && !fileName.endsWith('.json'))
let nameTools = fileName.map(item=>item.split('.')[0])

nameTools.map(tool => module.exports[tool] = require('./'+ tool))
