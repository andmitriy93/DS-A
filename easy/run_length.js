/*
Write a function that takes in a non-empty string and return its run-length encoding.
From Wiki 'run-length encoding is a form of lossless data compression in which runs of data are stored as 
a single data value and count, rather than as the original run". For this problem, a run of data is any 
sequence of consecutive, identical characters. So the run 'AAA' would be run-length-encoding as '3A'

To make things more complicated, however, the input string can contain alll sorts of special characters,
including numbers. And since encoded data must be decodable, this means that we can't naively run-length-encoding 
long runs. For example, the run 'AAAAAAAAAAAA' (12 A s), can't naivbely be encoded as '12A', since this string can 
be decoded as either 'AAAAAAAAAAAAA' or '1AA'. Thus, long runs (runs of 10 or more characters) should be encoded 
in a split fashion; the aformeentioned run should be encoded as '9AJA'

Input: 
string 'AAAAAAAAAAAAAABBCCCCDD'

Output:
'9A4A2B4C2D'
*/

// Time O(n^2) / Space O(n)
function runLengthEncoding(string) {
  let letterCounter = 0;
  let encodingString = '';

  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === string[idx + 1] && letterCounter < 8) {
      counter++;
    }else {
      letterCounter++;
      encodingString += letterCounter + string[idx]
      letterCounter = 0
    }
  }
  return encodingString
}

//Time O(n) / Space O(n)
function runLengthEncoding(string) {
	const resultString = [];
	let letterCounter = 1;
	
	for (let idx = 1; idx < string.length; idx++) {
		if (string[idx] !== string[idx - 1] || letterCounter === 9) {
			resultString.push(letterCounter.toString())
			resultString.push(string[idx - 1])
			letterCounter = 0
		}
		letterCounter++
	}

  // Handle the last run.
	resultString.push(letterCounter.toString());
	resultString.push(string[string.length - 1])
	return resultString.join('')
}