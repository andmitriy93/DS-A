/*
Write a function that takes in a sorted array of integers as weel as a target integer. The function should use the Binary Search algorithm 
to dtermine if the target integer is contained in the array and should return its index if its is, otherwise -1 
*/

// Recursivle Time O(logn) / Space O(logn)
function binarySearch(array, target) {
	return helperFunction(array, target, 0, array.length - 1)
}

function helperFunction(array, target, left, right) {
	if (left > right) return -1
	
	let mid = Math.floor((left + right) / 2)
	if (target > array[mid]) {
		return helperFunction(array, target, mid + 1, right)
	} else if (target < array[mid]) {
		return helperFunction(array, target, left, mid - 1)
	} else {
		return mid
	}
}

// Itterratively Time O(logn) / Space O(1)
function binarySearch(array, target) {
	return helperFunction(array, target, 0, array.length - 1)
}

function helperFunction(array, target, left, right) {
	while (left <= right) {
		let mid = Math.floor((left + right) / 2)
		if (target < array[mid]) {
			right = mid - 1
		} else if (target > array[mid]) {
			left = mid + 1
		} else {
			return mid
		}
	}
	return -1
}
