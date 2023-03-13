/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * Hoare’s partitioning scheme, named for Sir Charles Anthony Richard Hoare,
 * who developed the quicksort algorithm in 1959. It does fewer swaps than
 * other schemes
 * NOTE that in this scheme, the pivot’s final location is not necessarily at
 * the index that was returned (some edge cases).
 * - Time: O(n) linear despite nested loops because we still don't visit an
 *    index more than once.
 * - Space: O(1) constant.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization of quickSort. Focus only on the first cycle of the visualization
 *    for the partition portion only.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {number} The index where the smaller section ends.
 */
function partition(nums, leftIdx = 0, rightIdx = nums.length - 1) {
  const midIdx = Math.floor((leftIdx + rightIdx) / 2);
  const pivotVal = nums[midIdx];
  const tempPivotIdx = rightIdx;

  // Swap the pivot to the end of the section being partitioned so its
  // position can be kept track of, then move it last to its final position.
  [nums[midIdx], nums[tempPivotIdx]] = [nums[tempPivotIdx], nums[midIdx]];

  // Skip over the pivot that was moved to the end so it stays there for now.
  rightIdx = tempPivotIdx - 1;

  // Look for a num on the left and on the right that both need to be moved to
  // the other side so one swap can move both of them to the correct side.
  while (true) {
    // Move leftIdx until we find a num that is out of place.
    while (nums[leftIdx] < pivotVal) {
      leftIdx += 1;
    }

    // Move rightIdx until we find a num that is out of place.
    while (nums[rightIdx] > pivotVal) {
      rightIdx -= 1;
    }

    // All nums have been iterated over, partitioning is complete.
    if (leftIdx >= rightIdx) {
      // Swap the pivot to it's final location.
      [nums[tempPivotIdx], nums[leftIdx]] = [nums[leftIdx], nums[tempPivotIdx]];
      
      console.log(nums)
      console.log("Pivot: "+ pivotVal)
      
      return leftIdx;
    }

    // Swap the two out of place nums so they will both be on the correct side.
    [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx], nums[leftIdx]];

    // After swapping, we're done with this pair, move on.
    leftIdx += 1;
    rightIdx -= 1;
  }
}



function quickSort(nums = [], left = 0, right = nums.length - 1) {
  if (left < right) {
    const pivotIndex = partition2(nums, left, right); 
    quickSort(nums, left, pivotIndex); 
    quickSort(nums, pivotIndex + 1, right);
  }
  return nums;
}


const nums1 = [11, 3, 14, 10, 8, 6, 2, 7]; 
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7]; 
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];  
const nums4 = [2, 1];// 0

const test = [9,1, 1, 6, 10, 1, 1, 1 ]
console.log(partition(test))