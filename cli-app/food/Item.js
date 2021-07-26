module.exports = class Item{
    constructor(id,name, price) {
        this.id = id
        this.name = name
        this.price = price
    }
    print() {
        
        return `|------------------------------->\n`+
               `|${this.id}. ${this.name}: ${this.price.value}${this.price.currency}\n`+
               `|------------------------------->\n`
    }
}
