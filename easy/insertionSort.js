/*
Write a function that takes in an array of integers and return a sorted version of that arrray. Use the insertion Sort algorthm to sort he 
array

Input 
array = [8, 5, 2, 9, 5, 6, 3]

OUtput:
[2, 3, 5, 5, 6, 8, 9]
*/

function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		let j = i
		while (j > 0 && array[j] < array[j - 1]) {
			swap(j, j - 1, array)
			j--;
		}
	}
	return array
}

function swap(i, j, array) {
	let tmp = array[j]
	array[j] = array[i]
	array[i] = tmp
}