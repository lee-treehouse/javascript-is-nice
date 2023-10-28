// Determine if a 9 x 9 Sudoku board is valid.

const isValidSet = (set) => {
  let seen = new Set();
  for (let i = 0; i < 9; i++) {
    const value = set[i];

    if (!value) return false;
    if (value === ".") continue;

    if (!isValidValue(value)) {
      return false;
    }

    if (seen.has(value)) {
      return false;
    }

    seen.add(value);
  }
  return true;
};

const isValidValue = (value) => {
  const numberValue = parseInt(value, 10);

  if (isNaN(numberValue)) return false;

  // possibly easier just to check is in
  //[".","1","2"] etc

  const result = numberValue >= 0 && numberValue <= 9;
  return result;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // there should be 27 sets of 9 values to validate
  // validate the rows
  // ß

  // validate the rows
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    if (!isValidSet(board[rowIndex])) return false;
  }

  // validate the columns
  for (let colIndex = 0; colIndex < 9; colIndex++) {
    const columnValues = [];
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
      columnValues.push(board[rowIndex][colIndex]);
    }
    if (!isValidSet(columnValues)) return false;
  }

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
      if (!isValidSet(blockValues)) return false;
    }
  }

  return true;
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

console.log(isValidSudoku(valid));

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

console.log(isValidSudoku(invalid));
