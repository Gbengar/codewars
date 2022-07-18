//Your task is to write function factorial.

function factorial(n){
    let a = []
    for(let i = 1; i <= n ; i++){
      a.push(i)
    }
    return a.map(x=>x).reverse().reduce((a,b)=>a*b,1)
  }