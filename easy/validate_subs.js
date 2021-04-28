/*
Given two non-empty arrays of integers, write a function that determines whether the second array
is a subsequence of the first one.

A subsequence of an array is a set of number that aren't necessarily adjacent in the array, but that
are in the same order as they appear in the array. For instance, the number [1, 3. 4] form a
subsequence of the array [1, 2, 3, 4], and so do the number [2, 4]. Note that a single
number in an array and the array itself are both valid subsequences of the array.

Input:
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

Output:
true
*/

function isValidSubsequence(array, sequence) {
	let seqIdx = 0;
	for (const value of array) {
		if (seqIdx === sequence.length) break;
		if (sequence[seqIdx] === value) seqIdx++;
	}
	return seqIdx === sequence.length
}

// second way to do that
// function isValidSubsequence(array, sequence) {
// 	let arrIdx = 0;
// 	let seqIdx = 0;
// 	while (arrIdx < array.length && seqIdx < sequence.length) {
// 		if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
// 		arrIdx++;
// 	}
// 	return seqIdx === sequence.length;
// }