

module.exports.isNumber = (n) => {
    if(typeof n === "number" && !isNaN(n)) {
        return true
    }
    return false
}

