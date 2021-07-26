const fs = require('fs')
// const Food = require('../food/Food')
const map = require('./map')

module.exports.save = ( data, path)=> {
    data.type = data.constructor.name
    fs.writeFileSync(path,JSON.stringify(data))
}


module.exports.load = ( path)=> {

    let data =JSON.parse(fs.readFileSync(path).toString())
    const Clazz = require(map[data["type"]])
    // console.log()
    let obj = new Clazz(data.name,data.price)
    return obj
}
