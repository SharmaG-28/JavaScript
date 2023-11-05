// Array
const number = [1, 2, 3, 4, 5]

// Function to find Max Term
// Takes Array as input
const maxTerm = (nums) => {
  // setting 0th index term as Max Term
  let result = nums[0]

  // Loop to compare each term to get Max Term
  for (const i of nums){
     if(i > result)
       result = i
  }

  // return object as {result: ${result}}
  return {result}
}

// print output
console.log(maxTerm(number))