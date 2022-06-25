/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/


function find_average(array) {
  // your code here
  let newA = array.reduce((a,b)=> a+b,0)
  if(array.length === 0){
    return 0
  }else{
    return newA/array.length
  }
  
}