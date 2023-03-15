// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

// 2darray = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
const squareMatrix1 = [
    [1, 2, 3],  // [r][c]      
    [4, 5, 6],
    [9, 8, 9],
  ];


  const expectedA1 = 2;
  /* 
    left to right diagonal: 1 + 5 + 9 = 15
   // [0][0], [1][1], [2][2]
    right to left diagonal: 3 + 5 + 9 = 17
  // [0][2], [1][1], [2][0]
    absolute difference = 2
  */
  
  const squareMatrix2 = [
    [1, 2, 3, 4, 5], 
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ];

  const expectedA2 = 0; 
  /* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */
  
  const squareMatrix3 = [
    [7, 2, 3, 4, 5], 
    [1, 2, 3, 6, 5],
    [1, 2, 3, 4, 5],
    [1, 9, 3, 8, 5],
    [6, 2, 3, 4, 2],
  ];


  const expectedA3 = 7;
  /* 
    left to right diagonal: 7 + 2 + 3 + 8 + 2 = 22
    right to left diagonal: 5 + 6 + 3 + 9 + 6 = 29
    absolute difference = 7
  */
  
  /**
   * Calculates the absolute diagonal difference of a square matrix.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
   *    a square matrix (rows and columns).
   * @returns {number} Represents the absolute difference between the top left to
   *    bottom right diagonal and the top right to bottom left diagonal.
   */
// Room 1
function diagonalDifference(sqrMatrix) {
  // 
  let diff1 = 0;
  let diff2 = 0;
  
  for (i = 0; i < sqrMatrix.length; i++) {
    // columns
    diff1 += sqrMatrix[i][i]
    diff2 += sqrMatrix[i][sqrMatrix.length-i-1]
  }
  console.log(diff1, diff2)
  return Math.abs(diff1-diff2)
}

// Room 2
  function diagonalDifference(sqrMatrix) {
    let [x, y] = [0, 0]
    let leftToRight = 0
    let rightToLeft = 0
    while(x < sqrMatrix.length){
      leftToRight += sqrMatrix[x][y] // [0][0], [1][1]
      x++
      y++
    }
    y -- // back to length-1
    x = 0
    while(y >= 0){
      rightToLeft += sqrMatrix[x][y] // [0][2], [1][1]
      x++
      y--
    }
    absDiff = Math.abs(rightToLeft - leftToRight)
    return absDiff
  }

// Revised from Room 2 solution
  function diagonalDifference2(sqrMatrix) {
    let x = 0
    let leftToRight = 0
    let rightToLeft = 0
    while(x < sqrMatrix.length){
      leftToRight += sqrMatrix[x][x] // [0][0], [1][1], [2][2], [3][3], [4][4]
      rightToLeft += sqrMatrix[x][sqrMatrix.length-1-x]
      // [0][4], [1][3], [2][2], [3][1] , [4][0]
      x++
    }

    absDiff = Math.abs(rightToLeft - leftToRight)
    return absDiff
  }


console.log(diagonalDifference(squareMatrix1))
console.log(diagonalDifference(squareMatrix2))
console.log(diagonalDifference(squareMatrix3))