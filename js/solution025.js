/* 
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

*/
var isAnagram = function(test, original) {
    let test1 = test.toLowerCase().split('').sort().join('');
    let original1 = original.toLowerCase().split('').sort().join('');
    
    return test1 === original1 ? true : false
  };