// Array
const number = [1, 2, 3, 4, 5]

// Function to find Sum of Array
// Takes Array as input
const sumArray = (nums) => {
    let sum = 0
    // Loop to add each element of array
    for (const i of nums){
        sum += i
    }

    // return object as {sum: ${sum}}
    return {sum}
}

// print output
console.log(sumArray(number))