// Determine if a 9 x 9 Sudoku board is valid.

let validateCounter = 0;
const validateSet = (set) => {
  validateCounter++;
  console.log(set);
  //console.log("I should have 1 sets of 9 items.. do I?");
  if (set && set.length === 9) {
    //console.log("YES");
  }
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // there should be 27 sets of 9 values to validate
  // validate the rows
  // ß

  // validate the blocks
  // you want
  for (let blockColumnOffset = 0; blockColumnOffset < 3; blockColumnOffset++) {
    for (let blockRowOffset = 0; blockRowOffset < 3; blockRowOffset++) {
      const blockValues = [];

      for (let colIndex = 0; colIndex < 3; colIndex++) {
        for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
          const blockColIndex = 3 * blockColumnOffset + colIndex;
          const blockRowIndex = 3 * blockRowOffset + rowIndex;
          blockValues.push(board[blockRowIndex][blockColIndex]);
        }
      }
      validateSet(blockValues);
    }
  }
};

const valid = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

isValidSudoku(valid);

console.log(validateCounter);

const invalid = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
