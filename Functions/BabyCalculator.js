//Add function
const add = (a, b) => a + b
  
//Subtract function
const sub = (a, b) => a - b

//Divide function
function div(a, b){
    if(b == 0)
        return -1
    else
        return a / b
}

//Multiply function
const mul = (a, b) => a * b
  

console.log(add(10, 5))
console.log(sub(10, 5))
console.log(div(10, 5))
console.log(mul(10, 5))