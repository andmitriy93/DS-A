/*
You're given a string of available characters and a string representing a document that you need to generate
Write a function that determines if you can generate the document using the available characters. If you can 
generate the document, your function should return true; otherwise, it should return false.

You're only able to generate the document if the frequency of unique characters in the characters string is 
greater that or equal to the requency of unique characters in the document string. For example, if you're given
characters = 'abcabc' and document = 'aabbccc' you cannot generate the document because you're missing one c

The document that you need to create may contain any characters, including special cahracters, capital letters, 
numbers, and spaces.

note: you can always generate the emptystring('')

Input: 
characters = 'Bste!heti ogEAxpelrt x '
document = 'AlgoExpert is the Best!'

Output:
true
*/

// Time O(n * m) / Space O(1)
function generateDocument(characters, document) {
  let charHash = {}
  let docHash = {}

  for (let i of characters) {
    charHash[i] !== undefined ? charHash[i]++ : charHash[i] = 1
  }

  for (let i of document) {
    docHash[i] !== undefined ? docHash[i]++ : docHash[i] = 1
  }

  for (let key in docHash) {
    if (charHash[key] === undefined) return false
    if (charHash[key] < docHash[key]) return false
  }

  return true;
}


// Optimized solution
function generateDocument(characters, document) {
  for (const char of document) {
    const documentFrequency = countCharFrequency(char, document)
    const charactersFrequency = countCharFrequency(char, characters)
    if (documentFrequency > charactersFrequency) return false
  }

  return true
}

function countCharFrequency(character, target) {
  let frequency = 0;

  for (const char of target) {
    if (char === character) frequency++
  }

  return frequency;
}