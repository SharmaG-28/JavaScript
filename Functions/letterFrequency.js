// function to count freuency of each letter
// It takes phrase as input
const letterFrequency = (phrase) => {
    // initialising empty object
    let frequency = {}

    // loop to access each letter of phrase
    for(const letter of phrase){
        // Checking if letter exists in frequency Object
        if(letter in frequency)
            frequency[letter] += 1 //increment frequency by 1
        // If does not exist add letter in frequency
        else
            frequency[letter] = 1 //set frequency to 1
    }
    //return frequency object consist of frequency of each letter
    return frequency
  }

//Printing the output
console.log(letterFrequency(prompt("Write the phrase")))