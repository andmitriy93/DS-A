/*
Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's 
first non-repeating character.

The first non-repeating character is the first character in a string that occurs only once.

If the input string doesn't have any non-repeating characters, your function should return -1.

Input:
string = 'abcdcaf'

Ouput:
1 // THe frist non-repeating character is 'b' and is found at index 1

*/

function firstNonRepeatingCharacter(string) {
  let strHash = {}

  for (let i of string) {
    strHash[i] !== undefined ? strHash[i]++ : strHash[i] = 1
  }

  for (let key in strHash) {
    if (strHash[key] === 1) return string.indexOf(key)
  }

  return -1;
}