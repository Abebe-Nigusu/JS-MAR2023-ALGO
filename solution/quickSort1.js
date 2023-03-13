/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization of quickSort. Focus only on the first cycle of the visualization
 *    for the partition portion only.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */

// https://replit.com/@HeidiChen/JSMAR-Questions#solution/partition.js

function partition(nums = [], left = 0, right = nums.length - 1) {
  // let pivot = nums[Math.floor((left + right) / 2)]
  // while (left <= right) {
  //   while (nums[left] < pivot) {
  //     left++;
  //   }
  //   while (nums[right] > pivot) {
  //     right--;
  //   }
  //   if (left <= right) {
  //     let temp = nums[left]
  //     nums[left] = nums[right]
  //     nums[right] = temp
  //     left++
  //     right--
  //   }
  // }
  // console.log(nums)
  // return left;
}

const nums1 = [11, 8, 14, 3, 6, 2, 7];
// original : [11, 8, 14, 3, 6, 2, 7]
// new.    :  [ 3, 6, 2, 7, 11, 8, 14]

// return the pivot index :3
/* 
There are many possible answers for nums1 depending on which number is chosen
as the pivot.
E.g., if 3 is chosen as the pivot, the below are some solutions because
numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

function quickSort(nums) {
  if (nums.length < 2) {
    return nums
  }
  else {
    const pivot = nums[0]
    const leftNums = []
    const rightNums = []

    for (let i = 1; i < nums.length; i++) {
      nums[i] < pivot ?
        leftNums.push(nums[i]) :
        rightNums.push(nums[i])
    }
    return quickSort(leftNums).concat([pivot], quickSort(rightNums));
  }
}

console.log(quickSort(nums1));
console.log(quickSort(nums2));
console.log(quickSort(nums3));
console.log(quickSort(nums4));