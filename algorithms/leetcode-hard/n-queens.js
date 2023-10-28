var getDiagonals = (row, column, maxRows, maxColumns) => {
  let diagonals = [];

  // diagonals above and to the left
  let j = column - 1;
  for (let i = row - 1; i >= 0; i--) {
    if (j >= 0) {
      diagonals.push(`${i}:${j}`);
      j--;
    }
  }

  // diagnoals below and to the right
  j = column + 1;
  for (let i = row + 1; i < maxRows; i++) {
    if (j < maxColumns) {
      diagonals.push(`${i}:${j}`);
      j++;
    }
  }

  // diagonals above and to the right
  j = column + 1;
  for (let i = row - 1; i >= 0; i--) {
    if (j < maxColumns) {
      diagonals.push(`${i}:${j}`);
      j++;
    }
  }

  // diagnoals below and to the left
  j = column - 1;
  for (let i = row + 1; i < maxRows; i++) {
    if (j >= 0) {
      diagonals.push(`${i}:${j}`);
      j--;
    }
  }

  return diagonals;
};

var validateBoard = (rows) => {
  const numRows = rows.length;
  let queenCount = 0;

  let invalidDiagonals = new Set();
  let rowsWithQueen = new Set();
  let columnsWithQueen = new Set();

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].split("");
    if (cells.length !== numRows) {
      console.log("unequal amount of column and rows");
      return false;
    }

    for (let j = 0; j < cells.length; j++) {
      const cell = cells[j];

      const cellHasQueen = cell === "Q";

      if (cellHasQueen) {
        queenCount++;

        const queenAlreadyInRow = rowsWithQueen.has(i);
        const queenAlreadyInColumn = columnsWithQueen.has(j);

        if (queenAlreadyInColumn || queenAlreadyInRow) {
          console.log("there is already a queen in this row or column");
          return false;
        }

        if (invalidDiagonals.has(`${i}:${j}`)) {
          console.log("there is already a queen in this diagonal");
          return false;
        }

        const diagonals = getDiagonals(i, j, i.length, j.length);
        diagonals.forEach((diagonal) => {
          invalidDiagonals.add(diagonal);
        });
        rowsWithQueen.add(i);
        columnsWithQueen.add(j);
      }
    }
  }
  if (queenCount !== numRows) {
    console.log("queen count does not match number of rows");
    return false;
  }
  return true;
};

console.log(validateBoard([".Q..", "...Q", "Q...", "..Q."]));
console.log(validateBoard([".Q..", "...Q", "Q...", "..Q."]));

// console.log(getDiagonals(4, 3, 6, 6));

// console.log(getDiagonals(3, 4, 6, 8));
