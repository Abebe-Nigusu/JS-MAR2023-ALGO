/* 
Given by Riot games.
*/
// b70a164c32a20c10

// b : 70
// a: 184
// c: 42

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(str) {
  const letterHashCounts = {};
  let numStr = "";
  let letter = str[0];

  //b70a164c32a20c10
  for (let i = 1; i < str.length; i++) {
    const num = parseInt(str[i]);
    const isNum = !isNaN(num);
    const isLetter = isNaN(num);

    if (isNum) {
      numStr += str[i]; // "70"
    }

    // Not an else since it needs to run on last iteration ending with a num.
    if (isLetter || i === str.length - 1) {
      const letterCount = parseInt(numStr);// letterCount = 70

      if (letter in letterHashCounts) {
        letterHashCounts[letter] += letterCount; // "b" : 70
      } else {
        letterHashCounts[letter] = letterCount;
      }

      // reset for next letter and it's following digits
      letter = str[i];
      numStr = "";
    }
  }

  const alphabetized = Object.keys(letterHashCounts).sort();

  let newHash = "";

  // This could have been chained after the sort as a .forEach and then concat
  // the string, or .reduce instead to create the string to return.
  for (let i = 0; i < alphabetized.length; i++) {
    const letter = alphabetized[i];
    newHash += letter + letterHashCounts[letter];
  }

  return newHash;
}

function rehashArray(str) {
  const letterHashCounts = []
  let numStr = "";
  let letter = str[0];

  //b70a164c32a20c10
  for (let i = 1; i < str.length; i++) {
    const num = parseInt(str[i]);
    const isNum = !isNaN(num);
    const isLetter = isNaN(num);

    if (isNum) {
      numStr += str[i];
    }

    if (isLetter || i === str.length - 1) {
      const letterCount = parseInt(numStr);
      let charCode = letter.charCodeAt() - 'a'.charCodeAt() // 'c'- 'a' = 2
      if (letterHashCounts[charCode] === undefined) {
        letterHashCounts[charCode] = 0
      } 
      letterHashCounts[charCode] += letterCount;

      letter = str[i];
      numStr = "";
    }
  }

  console.log(letterHashCounts)

  let newHash = "";

  for (let i = 0; i < letterHashCounts.length; i++) {
    if (letterHashCounts[i]) {
      newHash += String.fromCharCode(i+97)
      newHash += letterHashCounts[i];
    }
  }
  return newHash;
}
console.log(rehashArray(str1))


function rehash2(s) {
  const letterHashCounts = {};

  // This for loop could be a while loop. It doesn't increment up here because
  // we are incrementing inside it.
  for (let i = 0; i < s.length;) {
    // Retrieve letter at current index then increment to the num after.
    let char = s[i++];
    let numStr = "";

    /**
     * Look ahead to find potentially multiple digits after letter.
     * parseInt returns NaN if it fails to parse to a number.
     * We can't simply check for a truthy parsed int because 0 is falsy.
     * We can't use typeof because typeof NaN is "number". This is why we use
     * not Not a Number to check if we parsed a number.
     */
    while (i < s.length && !isNaN(parseInt(s[i]))) {
      numStr += s[i++];
    }

    if (letterHashCounts.hasOwnProperty(char)) {
      letterHashCounts[char] += parseInt(numStr);
    } else {
      letterHashCounts[char] = parseInt(numStr);
    }
  }

  const alphabetized = Object.keys(letterHashCounts).sort();

  let newHash = "";

  for (let i = 0; i < alphabetized.length; i++) {
    const letter = alphabetized[i];
    newHash += letter + letterHashCounts[letter];
  }

  return newHash;
}



/* 
Given two strings,
return true if the first string can be built from the letters in the 2nd string
Ignore case
.indexOf will only tell you if the letter is found one time
*/
// 1 h, 1 e, 3 l, 2 o, 1 r, 1 d
const strA1 = "Hello World";
const strB1 = "lloeh wordl";
//const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function canBuildS1FromS2(s1, s2) { }