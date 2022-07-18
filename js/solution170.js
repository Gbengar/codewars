/*When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"*/
function position(letter){
    let alp ='abcdefghijklmnopqrstuvwxyz'
    
    return `Position of alphabet: ${alp.indexOf(letter) + 1}`
  }