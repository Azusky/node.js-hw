const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

module.exports.printMenu = ( menu,cb) =>{
    menu.forEach(item =>
        console.log(item.print()))

        rl.question(" Choose >> ", (option) =>{
            cb(option)
        })

}
module.exports.printMessage = (message) =>{
    console.log(`${message} >>`)
}

module.exports.search = (idNum, myArray)=> {
    for (let i=0; i < myArray.length; i++) {
        if (myArray[i].id === idNum) {
            return myArray[i];
        }
    }
}
