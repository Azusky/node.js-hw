let { menu,search, printMenu, printMessage} = require('./food')

function mainLoop(){
    printMenu(menu, (option) => {
        let chooseOption =search(parseInt(option),menu)

    // menu.forEach(item =>{
    //     if(item.id == parseInt(option)){
    //         console.log(item.print())
    //     }
    // })

    if( option != "") {
        if (chooseOption){
            console.log(chooseOption.print())
        }
        else {
            console.log("inexistent option")
        }
        setTimeout(mainLoop, 500)
    }

})}

mainLoop()
