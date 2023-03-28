/* 
  Given to me (Neil) in an interview
  Given a string
  return whether or not it's possible to make a palindrome out of the string's
  characters.
  What is it about a string that makes it possible for it to become a
  palindrome?
  tacocat , dad, racecar,hannah
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "adaad";
const expected5 = true;
// Explanation: "daaad" / "adada"

const  str6 = "abc";
const expected6 = false;


// one odd number character

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(str) {
  const freq = {};
  // check to see if string is empty, if empty return false
  if(str.length < 1) return false;
  // if one character return true
  if(str.length === 1) return true;
  // get the frequency of each letter
  for(let i = 0; i < str.length; i++) {
    if(freq[str[i]]) freq[str[i]]++;
    else freq[str[i]] = 1;
  }

  console.log(freq)
  // check to see if pairs
  let odds = 0;
  for(const value of Object.values(freq)) {
    if(value % 2 === 1) odds++;
    if(odds > 1) return false
  }

  // for (const key in freq){
  //   if(freq[key] &2 === 1) odds++
  //   if(odds>1) return false
  // }
  
  return true;
  // if pairs with 1 single character return true
  // if() return true;
  // if not return false
  // return false;
}

// console.log(canStringBecomePalindrome(str1));
// console.log(canStringBecomePalindrome(str2));
// console.log(canStringBecomePalindrome(str3));
// console.log(canStringBecomePalindrome(str4));
// console.log(canStringBecomePalindrome(str5));
console.log(canStringBecomePalindrome(str6));


// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

/*
  Input: arr, callback
  Output: arr (with elements removed)
  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.
  Return an empty array if the callback never returns true
*/

const nums1 = [1, 4, 3, 6, 2, 9, 15];
const callback1 = (elem) => {
  return elem > 5;
};
//const expected1 = [6, 2, 9, 15];

const nums2 = [...nums1];
const callback2 = (elem) => {
  return elem > 2;
};
//const expected2 = [4, 3, 6, 2, 9, 15];

const nums3 = [...nums1];
const callback3 = (elem) => false; // a callback that always returns false
//const expected3 = [];

/**
 * Removes every element in the array, starting from idx 0 until the callback
 * function returns true when passed the iterated element.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @callback cb A callback function that expects to receive an array element.
 * @returns {Array<any>} The given array with only the remaining items.
 */

// slice / splice
function dropIt(arr, cb) {}