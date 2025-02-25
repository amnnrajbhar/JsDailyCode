// Write a function that counts the number of words in a sentence.

// Input: "Hello, how are you today?"
// Expected Output: 5

function countWords(sentence) {
    // write your code below 
    return sentence.split(' ').length;
};
console.log(countWords('Hello, how are you today?'));