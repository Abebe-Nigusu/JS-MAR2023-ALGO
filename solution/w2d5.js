// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg
// Sample interview question for Google : https://www.youtube.com/watch?v=XKu_SEDAykw

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Bonus: Make it O(n) time
*/



/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */


const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
// expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
// expected2 = [2, 4];

// BONUS 
const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
// expected3 = [1, 6];

function twoSum(nums, targetSum) {
  const returnPair = []
  for(let i=0; i<nums.length; i++){
    for(let j=i+1; j<nums.length; j++){
      if(nums[i] + nums[j] === targetSum){
        returnPair.push(i, j)
      }
    }
  }
  return returnPair
}

function twoSumEfficient(nums, targetSum){
    const map ={}

    // go through the array
    for(let i=0; i<nums.length; i++){
      const val = nums[i]; // 7
      const compliment = targetSum - val; // 2
      // check if the element exists in the map
      if(map.hasOwnProperty(val.toString())){
    // if it exists, return the index 
        return [map[val], i]
      }else{
    // if it doesn't exist, store that compliment as key, index as value
        map[compliment] = i
      }
    }
}

console.log(twoSum(nums1, targetSum1))
console.log(twoSum(nums2, targetSum2))
console.log(twoSum(nums3, targetSum3))





// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8

/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
  Hard Bonus: make it O(n) time
*/

/* 
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * nums.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */

const nums4 = [1, 2, 1, 1, 2, 3]; // [1, 1, 1, 2, 2, 3]
const k1 = 2; // First 2 most frequent number
// expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums5 = [0, 2,0, 0, 2, 3]; // [0,0,0,2,2,3]
const k2 = 1; // most frequent number
// expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums6 = [1, 2, 3, 1, 2,  3]; // [1, 1, 2, 2, 3, 3]
const k3 = 3;
// expected3 = [1, 2, 3];

function kMostFrequent(nums, k) {
  const mostFreqNums = [];
  const numToFrequency = new Map();
  const frequencyToNums = new Map();
  let maxFreq = 0;

  for (const num of nums) {
    if (numToFrequency.has(num) === false) {
      numToFrequency.set(num, 0);
    }
    const newFrequency = numToFrequency.get(num) + 1;
    numToFrequency.set(num, newFrequency);

    if (newFrequency > maxFreq) {
      maxFreq = newFrequency;
    }
  }

  /* 
  build a frequency table that is a reverse of the above so we can look up
  starting from a frequency to find what numbers have that frequency.
  since multiple nums can have the same frequency, the value of this table
  needs to be an array.
  Alternatively, this could be a 2d sparse array, often referred to as
  'buckets' where each nested array is a 'bucket' / container to hold
  items.
  */
  for (const [num, frequency] of numToFrequency) {
    if (frequencyToNums.has(frequency) === false) {
      frequencyToNums.set(frequency, []);
    }
    frequencyToNums.get(frequency).push(num);
  }

  console.log("numToFrequency:", numToFrequency);
  console.log("frequencyToNums:", frequencyToNums);
  console.log("maxFreq:", maxFreq);

  let nextMostFreq = maxFreq;

  while (mostFreqNums.length < k && nextMostFreq > 0) {
    // .has, .get, .push, .pop are all O(1) constant time.
    if (
      frequencyToNums.has(nextMostFreq) &&
      frequencyToNums.get(nextMostFreq).length > 0
    ) {
      const nextMostFreqNum = frequencyToNums.get(nextMostFreq).pop();
      mostFreqNums.push(nextMostFreqNum);
    } else {
      // no nums have this frequency, decrement to check for next most freq
      nextMostFreq--;
    }
  }
  return mostFreqNums;
}

/**
 * - Time: O(n) + O(n) + O(n^2) + O(k) -> O(n^2) quadratic due to sort's worst
 *    case.
 * - Space: O(n) linear.
 */
function kMostFrequentSort(nums, k) {
  const freq = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (freq.has(num)) {
      freq.set(num, freq.get(num) + 1);
    } else {
      freq.set(num, 1);
    }
  }

  const keys = [...freq.keys()];

  // sort gives us two elements side by side, A and B, a - b sorts ascending, b - a for descending
  keys.sort((numA, numB) => {
    const freqA = freq.get(numA);
    const freqB = freq.get(numB);
    return freqB - freqA;
  });

  // slice only the first k keys, if using a plain object for the freq table instead of the
  // built in Map object, would need to convert the keys back to ints, could do this with .map
  return keys.slice(0, k);
}