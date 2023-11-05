const wordFrequency = (phrase) => {
    
    //splitting each word separated by ' ' and adding in array
    array = phrase.split(' ') 

    // initialising empty object frequency
    let frequency = {}

    // loop to access each word of array
    for(const word of array){
        // Checking if letter exists in frequency Object
        if(word in frequency)
            frequency[word] += 1 //increment frequency by 1
        // If does not exist add letter in frequency
        else
            frequency[word] = 1 //set frequency to 1
    }
    //return frequency object consist of frequency of each letter
    return frequency
  }
  
//Printing the output
console.log(wordFrequency(prompt("Write the phrase")))