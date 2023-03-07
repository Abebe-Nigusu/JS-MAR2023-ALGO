const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
function SelectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minNumber = i;
    for(let j= i+1; j < nums.length; j++){ // to find minNumber
      if (nums[j] < nums[minNumber]){
        minNumber = j;
      }
    }
    if (minNumber != i){
      [nums[i], nums[minNumber]] = [nums[minNumber],nums[i]];
    }
  }
  return nums;
}  
console.log(SelectionSort(numsRandomOrder));