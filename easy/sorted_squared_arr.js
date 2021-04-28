/*
Write a function that takes in a non-empty array of integers that are sorted in ascending order and
returns a new array of the same length with the squared of the original integers also sorted in 
ascending order

Input:
array = [1, 2, 3, 4, 5, 6, 8, 9]

Output:
[1, 4, 9, 25, 36, 64, 81]
*/

function sortedSquaredArray(array) {
	let squaredArr = [];
	for (let i = 0; i < array.length; i++) {
		let num = array[i];
		squaredArr.push(num * num);
	}
	squaredArr.sort((a, b) => a - b)
	return squaredArr;
}