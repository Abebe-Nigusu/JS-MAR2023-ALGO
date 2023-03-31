// /* 
// Given two strings,
// return true if the first string can be built from the letters in the 2nd string
// Ignore case

// .indexOf will only tell you if the letter is found one time
// */

// const strA1 = "Hello World";
// const strB1 = "lloeh wordl";
// const expected1 = true;

// const strA2 = "Hey";
// const strB2 = "hello";
// const expected2 = false;
// // Explanation: second string is missing a "y"

// const strA3 = "hello";
// const strB3 = "helo";
// const expected3 = false;
// // Explanation: second string doesn't have enough "l" letters

// const strA4 = "hello";
// const strB4 = "lllheo";
// const expected4 = true;

// const strA5 = "hello";
// const strB5 = "heloxyz";
// const expected5 = false;
// // Explanation: strB5 does not have enough "l" chars.

// /**
//  * Determines whether s1 can be built using the chars of s2.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} s1
//  * @param {string} s2
//  * @returns {boolean}
//  */
function canBuildS1FromS2(s1, s2) {
  let tempS2 = []
  for(let i = 0; i < s2.length;i++){
    tempS2.push(s2[i].toLowerCase())
  }
  for (let i = 0; i < s1.length; i++) {
    let index = tempS2.indexOf(s1[i].toLowerCase())
    if(index === -1){
      return false;
    }else {
      tempS2.splice(index,1)
    }
  }
  return true;
}

// console.log("Test 1")
// console.log(canBuildS1FromS2(strA1,strB1))
// console.log(expected1)
// console.log("Test 2")
// console.log(canBuildS1FromS2(strA2,strB2))
// console.log(expected2)
// console.log("Test 3")
// console.log(canBuildS1FromS2(strA3,strB3))
// console.log(expected3)
// console.log("Test 4")
// console.log(canBuildS1FromS2(strA4,strB4))
// console.log(expected4)
// console.log("Test 5")
// console.log(canBuildS1FromS2(strA5,strB5))
// console.log(expected5)

// ------------------------------------------------------
/*
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.

Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times, find a pair of two songs
where the song pair ends 30 seconds before the bus ride ends.

return an array of the song indices or [-1, -1] if no pair is found.

If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
// */

const busDuration1 = 300;
const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
const expected1 = [4, 6]; // 210, 60
// /* Explanation:
// There are multiple pairs that add up to 30 seconds before the bus duration.
// The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
// */

const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const expected2 = [3, 6]; // 230, 40
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const expected3 = [-1, -1]; // not found.

// /**
//  * Finds the pair of song durations that adds up to 30 seconds before the bus
//  * ride ends.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {number} busDuration Seconds.
//  * @param {number} songDurations Seconds.
//  * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
//  *    pair is found.
//  */

// // const busDuration2 = 300;
// // const songDurations2 = [70, 120, 200, 230, 45, 210, 60, 50];

// //newDur = 270
// // max = 230
// // rem = 40
// // res = [0,2]


function musicRuntime(busDuration, songDurations) {
  const newDur = busDuration-30;
  let result = [-1,-1]
  let maxSong = 0
  let maxIdx = 0
//[70, 120, 200, 45, 210, 40, 60, 50]
//                    i 
  // maxSong = 210 maxIdx : 4
  
  for(let i = 0; i<songDurations.length; i++){
    if((songDurations[i]>maxSong || songDurations[i]>songDurations[result[0]]) && songDurations[i]<newDur){
      maxSong = songDurations[i]
      maxIdx = i;
    }
    
    const remainder = newDur-maxSong
    const remainderIdx = songDurations.indexOf(remainder,1)
    if(remainderIdx != -1){
      result = [maxIdx, remainderIdx]
    } 
  }
  
  return result;
}


function musicRuntime2(busDuration, songDurations) {
  let songPair = [-1, -1];
  const targetPairDuration = busDuration - 30;
  const songTable = {};

  for (let i = 0; i < songDurations.length; i++) {
    // In the case of dupe durations this would overwrite. If that was a
    // problem, we could store an array of indexes at this key.
    songTable[songDurations[i]] = i;
  }

  for (let songAIdx = 0; songAIdx < songDurations.length; songAIdx++) {
    const songA = songDurations[songAIdx];
    const targetSongDuration = targetPairDuration - songA;

    if (targetSongDuration in songTable) {
      const songBIdx = songTable[targetSongDuration];
      const songB = songDurations[songBIdx];

      // Same logic as space optimized solution written differently.
      // No existing song pair.
      if (songPair[0] === -1) {
        songPair = [songAIdx, songBIdx];
        continue;
      }

      // Pair exists, only update if new pair has longer song.
      const max = Math.max(
        songA,
        songB,
        songDurations[songPair[0]],
        songDurations[songPair[1]]
      );

      if (max === songA || max === songB) {
        songPair = [songAIdx, songBIdx];
      }
    }
  }
  return songPair;
}

console.log("Test 1")
console.log(musicRuntime(busDuration1,songDurations1))
console.log(expected1)
console.log("Test 2")
console.log(musicRuntime(busDuration2,songDurations2))
console.log(expected2)
console.log("Test 3")
console.log(musicRuntime(busDuration3,songDurations3))
console.log(expected3)
