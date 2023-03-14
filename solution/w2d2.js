/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * https://www.researchgate.net/publication/332453167/figure/fig1/AS:748486492450816@1555464494152/A-Venn-diagram-of-unions-and-intersections-for-two-sets-A-and-B-and-their-complements.png
 */



/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */


// For Intersection
const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7]; //repeated: 2, 2, 7
const expected1 = [2, 7];// return the distinct intersect numbers

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];



function orderedIntersection(sortedA, sortedB) {
  const intersectArr = []
  let [i, j] = [0, 0]
  while(i < sortedA.length && j < sortedB.length){
    if(sortedA[i] === sortedB[j]){ // if the 2 elements are the same
      if(intersectArr[intersectArr.length-1] !== sortedA[i]){ // if intersectArr hasn't pushed that yet
         intersectArr.push(sortedA[i])
      }
      i++ // move both pointers
      j++
    } else if(sortedA[i] > sortedB[j]){
      j++
    } else if(sortedA[i] < sortedB[j]){
      i++
    } 
  }
  return intersectArr
}

function IntersectArray(arr1, arr2){
  const result = arr1.filter(x => arr2.includes(x));
  const resultArr = new Set(result);
  return resultArr;
  
}

console.log(orderedIntersection(numsA1, numsB1));
console.log(orderedIntersection(numsA2, numsB2));
console.log(orderedIntersection(numsA3, numsB3));



/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
// For Union
const numsA4 = [1, 2, 2, 2, 7];
const numsB4 = [2, 2, 6, 6, 7]; 
const expected4 = [1, 2, 2, 2, 6, 6, 7];

const numsA5 = [1, 2, 2, 2, 7, 10, 15, 20];
const numsB5 = [2, 2, 6, 6, 7];
const expected5 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];

function orderedMultisetUnion(sortedA, sortedB) {
  const unionArr = []
  let [i, j] = [0, 0]
  while(i < sortedA.length &&  j < sortedB.length){
    if(sortedA[i] === sortedB[j]){
      unionArr.push(sortedA[i])
      i++
      j++
    } else if(sortedA[i] > sortedB[j]){
      unionArr.push(sortedB[j])
      j++
    } else if(sortedA[i] < sortedB[j]){
      unionArr.push(sortedA[i])
      i++
    } else{
      i++
      j++
    }
  }
    // remaining items in sortedA / sortedB
    while(i < sortedA.length){
      unionArr.push(sortedA[i])
      i++
    }
    while(j < sortedB.length){
      unionArr.push(sortedB[j])
      j++
    }
  
  return unionArr
}

// console.log(orderedMultisetUnion(numsA4, numsB4))
// console.log(orderedMultisetUnion(numsA5, numsB5))



// bonus algo: 

/**
  * Complete the intersection & union algo with 2 unsorted arrays 
  * Try to complete the algo with O(n) time complexity
*/





