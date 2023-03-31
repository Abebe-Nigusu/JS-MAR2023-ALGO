/* 
https://leetcode.com/problems/container-with-most-water/
*/

/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.
See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/


const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

function containerWithMostWater(heights) {
  let maxWater = 0;
  let leftIndex = 0;
  let rightIndex = heights.length-1
  // ^ should change with each calculation

  while (leftIndex < rightIndex){
    const width = rightIndex-leftIndex; // width will change
    const leftHeight = heights[leftIndex]
    const rightHeight = heights[rightIndex]

    const smallHeight = leftHeight < rightHeight ? leftHeight : rightHeight
    // figure out smallest height from either side of container
    
    const currentWater = width * smallHeight //current max water area

    // is max stored > currentWater, set max to greatest value
    maxWater = currentWater > maxWater? currentWater : maxWater
    
    // left++ or right-- based on smallHeight
    smallHeight == leftHeight ? leftIndex++ : rightIndex--
  }

  return maxWater
  
}

console.log(containerWithMostWater(heights1))
console.log(containerWithMostWater(heights2))
console.log(containerWithMostWater(heights3))
console.log(containerWithMostWater(heights4))

//heights farther apart = maximum stored water
// to find stored water, width * smaller heights

console.log("using scary math functions")

function containerWithMostWater2(heights) {
  let maxWater = 0;
  let leftIndex = 0;
  let rightIndex = heights.length - 1;

  while (leftIndex < rightIndex) {
    const width = rightIndex - leftIndex;
    const height = Math.min(heights[leftIndex], heights[rightIndex]);
    const area = width * height;
    maxWater = Math.max(maxWater, area);

    if (heights[leftIndex] < heights[rightIndex]) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return maxWater;
}

// console.log(containerWithMostWater2(heights1));
// console.log(containerWithMostWater2(heights2))
// console.log(containerWithMostWater2(heights3))
// console.log(containerWithMostWater2(heights4))