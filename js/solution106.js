//Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
function include(a,b){
    return Number.isInteger(a.find(x => x === b)) ? true:false
}