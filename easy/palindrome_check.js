/*
Write a function that takes in a non-empty string and that return a boolean representing whether the string 
is a palindrome. A palindrome is defined a string that's written the same forward and backward. Note that 
single-charaacter strings are palindromes.

Input:
string = 'abcdcba'

Output:
true

*/

function isPlaindrome(string) {
  let reversedStr = string.split('').reverse().join('')
  return string === reversedStr
}