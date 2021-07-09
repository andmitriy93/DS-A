/*
Given a non-empty string of lowercase letters and a non-negative integer representing a key, 
write a function that return a new string obtained by shifting every letter in the input string 
by k position in the alphabet, where is k is the key.

Note that letters should 'wrap' around alphabet; in other words, the letter z shifted by one return the letter a.

Input:
string = 'zyx'
key = 2

Output:
'zab'
*/

function caesarCipherEncryptor(string, key) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newString = '';

  
	for (let idx = 0; idx < string.length; idx++) {
		let oldIdx = alphabet.indexOf(string[idx])
		let newIdx = (oldIdx + key) % 26
		newString += alphabet[newIdx]
	}
	return newString;

}