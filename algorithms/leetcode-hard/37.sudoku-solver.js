class SodukuBoardValuesExtractor {
  static shouldIgnoreValue = (value) => {
    return value === ".";
  };

  static getSquareValues = (board, rowIndex, colIndex) => {
    const values = [];

    let rowRangeStart = 0;
    let rowRangeEnd = 2;
    let colRangeStart = 0;
    let colRangeEnd = 2;

    // todo all this can be simplified, divided by three and rounded down something like that then times by 3

    if (rowIndex >= 3) {
      rowRangeStart += 3;
      rowRangeEnd += 3;
    }

    if (rowIndex >= 6) {
      rowRangeStart += 3;
      rowRangeEnd += 3;
    }

    if (colIndex >= 3) {
      colRangeStart += 3;
      colRangeEnd += 3;
    }

    if (colIndex >= 6) {
      colRangeStart += 3;
      colRangeEnd += 3;
    }

    for (
      let rowRangeIndex = rowRangeStart;
      rowRangeIndex <= rowRangeEnd;
      rowRangeIndex++
    ) {
      for (
        let colRangeIndex = colRangeStart;
        colRangeIndex <= colRangeEnd;
        colRangeIndex++
      ) {
        const value = board[rowRangeIndex][colRangeIndex];
        if (!SodukuBoardValuesExtractor.shouldIgnoreValue(value))
          values.push(value);
      }
    }
    return values;
  };

  static getRowValues = (board, rowIndex) => {
    const values = [];
    for (let colIndex = 0; colIndex <= 8; colIndex++) {
      const value = board[rowIndex][colIndex];
      if (!SodukuBoardValuesExtractor.shouldIgnoreValue(value))
        values.push(value);
    }
    return values;
  };

  static getColValues = (board, colIndex) => {
    const values = [];
    for (let rowIndex = 0; rowIndex <= 8; rowIndex++) {
      const value = board[rowIndex][colIndex];
      if (!SodukuBoardValuesExtractor.shouldIgnoreValue(value))
        values.push(value);
    }
    return values;
  };
}

class SodukuBoard {
  static isComplete(board) {
    // check the rows
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
      const rowValues = SodukuBoardValuesExtractor.getRowValues(
        board,
        rowIndex
      );
      if (!SodukuRowColumnOrSquareValues.isComplete(rowValues)) return false;
    }

    // check the columns
    for (let colIndex = 0; colIndex < 9; colIndex++) {
      const colValues = SodukuBoardValuesExtractor.getColValues(
        board,
        colIndex
      );
      if (!SodukuRowColumnOrSquareValues.isComplete(colValues)) return false;
    }

    // check the squares
    //0, 3, 6
    for (let rowIndex = 0; rowIndex <= 6; rowIndex += 3) {
      // 0, 3, 6
      for (let colIndex = 0; colIndex <= 6; colIndex += 3) {
        const squareValues = SodukuBoardValuesExtractor.getSquareValues(
          board,
          rowIndex,
          colIndex
        );
        if (!SodukuRowColumnOrSquareValues.isComplete(squareValues))
          return false;
      }
    }
    return true;
  }

  static isValid(board) {
    // check the rows
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
      const rowValues = SodukuBoardValuesExtractor.getRowValues(
        board,
        rowIndex
      );
      if (!SodukuRowColumnOrSquareValues.isValid(rowValues)) return false;
    }

    // check the columns
    for (let colIndex = 0; colIndex < 9; colIndex++) {
      const colValues = SodukuBoardValuesExtractor.getColValues(
        board,
        colIndex
      );
      if (!SodukuRowColumnOrSquareValues.isValid(colValues)) return false;
    }

    // check the squares
    //0, 3, 6
    for (let rowIndex = 0; rowIndex <= 6; rowIndex += 3) {
      // 0, 3, 6
      for (let colIndex = 0; colIndex <= 6; colIndex += 3) {
        const squareValues = SodukuBoardValuesExtractor.getSquareValues(
          board,
          rowIndex,
          colIndex
        );
        if (!SodukuRowColumnOrSquareValues.isValid(squareValues)) return false;
      }
    }
    return true;
  }

  static getValidEntriesForCell = (board, rowIndex, colIndex) => {
    const candidates = [];

    const rowValues = SodukuBoardValuesExtractor.getRowValues(board, rowIndex);
    const colValues = SodukuBoardValuesExtractor.getColValues(board, colIndex);
    const squareValues = SodukuBoardValuesExtractor.getSquareValues(
      board,
      rowIndex,
      colIndex
    );

    console.log(rowValues);

    for (let candidate = 1; candidate <= 9; candidate++) {
      const candidateString = candidate.toString();

      // todo: make a set of these and then only need one check
      if (
        !rowValues.includes(candidateString) &&
        !colValues.includes(candidateString) &&
        !squareValues.includes(candidateString)
      ) {
        candidates.push(candidateString);
      }
    }
    return candidates;
  };
}

class SodukuRowColumnOrSquareValues {
  static isComplete(values) {
    if (!values) return false;
    if (values.length != 9) return false;

    const seen = new Set();

    let total = 0;
    values.forEach((value) => {
      const valueInt = parseInt(value, 10);

      if (isNaN(valueInt)) return false;
      if (valueInt < 1 || valueInt > 9) return false;

      if (seen.has(valueInt)) return false;

      total += valueInt;
      seen.add(valueInt);
    });
    if (total != 45) return false;

    return true;
  }

  static isValid(values) {
    // only acceptable values and values should not repeat
    // do we need to consider "."
    const seen = new Set();

    for (const value of values) {
      const valueInt = parseInt(value, 10);

      if (isNaN(valueInt)) return false;
      if (valueInt < 1 || valueInt > 9) return false;
      if (seen.has(valueInt)) {
        // ah i am returning false from the foreach not from the function
        // change it to a for of
        // https://stackoverflow.com/a/32101207
        return false;
      }

      seen.add(valueInt);
    }

    return true;
  }
}

/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  return [];
};
// @lc code=end

const functionToTest = solveSudoku;

// example 1
let input = [
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

let invalidInput = [
  ["5", "3", "3", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

let expected = [
  ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
  ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
  ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
  ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
  ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
  ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
  ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
  ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
  ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
];

function test(expected, actual) {
  if (
    expected === actual ||
    (expected && actual && expected.toString() === actual.toString())
  ) {
    console.log("PASS");
  } else {
    console.log(`FAIL: expected: ${expected}, actual: ${actual}`);
  }
}

test(true, SodukuBoard.isComplete(expected));
test(false, SodukuBoard.isComplete(input));
test(false, SodukuBoard.isValid(invalidInput));
test(true, SodukuBoard.isValid(expected));

// test([9, 8, 6], getRowValues(input, 2));

// test([7, 9, 6, 2, 1, 8], getColValues(input, 4));

// test([4, 1, 9, 8], getSquareValues(input, 6, 3));

// test([5, 9], getValidEntriesForCell(input, 5, 3));

test(
  true,
  SodukuRowColumnOrSquareValues.isComplete([1, 2, 3, 4, 5, 6, 7, 8, 9])
);
test(
  false,
  SodukuRowColumnOrSquareValues.isComplete([1, 2, 3, 5, 5, 5, 7, 8, 9])
);

//test(expected, functionToTest(input));
