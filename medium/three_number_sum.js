/*
Write a funciton that takes in a non-empty array of distinct integers and an integer represengting a target sum.
The sunciton should find all triplets in the array that sum up to the target sum and return a two-dimensional array 
of all these treplets. The numbers in each tirplet should be ordered in ascending order, and the triplets themselves 
should be ordered in ascending order with respect to the numbers the hold.

If no three numbers sum up to the target sum, the function should return an empty array

INPUT:
array = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0

OOUTPUT:
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

*/

// O(n^3) / Space O(n)
function threeNumberSum(array, targetSum) {
	const triplets = [];
	array.sort((a, b) => a - b)
	
	for (let idx = 0; idx < array.length - 2; idx++) {
		let num1 = array[idx];
		for (let j = idx+1; j < array.length - 1; j++) {
			let num2 = array[j]
			for (let k = j+1; k < array.length; k++) {
				let num3 = array[k]
				if (num1 + num2 + num3 === targetSum) triplets.push([num1, num2, num3])
			}
		}
	}
	
	return triplets;
}

// Time O(n^2) / Space O(n)
// Formula: currentSum = currentNumber + L + R
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b)
  const triplets = [];

	for (let idx = 0; idx < array.length - 2; idx++) {
		let left = idx + 1;
		let right = array.length - 1;

		while (left < right) {
			const currentSum = array[idx] + array[left] + array[right]
			if (currentSum === targetSUm) {
				triplets.push([array[idx], array[left], array[right]])
				left++;
				right--;
			} else if (currentSum < targetSum) {
				left++;
			} else if (currentSum > targetSum) {
				right--;
			}
		}
	}
	return triplets;
}
