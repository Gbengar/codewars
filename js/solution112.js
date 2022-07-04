/*Task:
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

Examples:
*/
function remainder(n, m){
    let s = [n,m].sort((a,b)=>b-a)  
    return s[0] % s[1]
  }