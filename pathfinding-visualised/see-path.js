class PathVisualiser {
  seekTable;
  pathTable;
  grid;
  marco = "polo";

  CSS_CLASS_VISITED = "visited";
  CSS_CLASS_BACKTRACKED = "backtracked";
  CSS_CLASS_QUEUED = "queued";
  CSS_CLASS_FIRST = "first";
  CSS_CLASS_LAST = "last";

  animationCSSClasses = [
    this.CSS_CLASS_VISITED,
    this.CSS_CLASS_BACKTRACKED,
    this.CSS_CLASS_QUEUED,
    this.CSS_CLASS_FIRST,
    this.CSS_CLASS_LAST,
  ];

  constructor(grid) {
    this.grid = grid;
  }

  hasObstacle(coord) {
    return this.grid.isCellBlockedOrOutOfBounds(coord);
  }

  addPathToTable(table, path, payload) {
    this.applyPathActionToTable(table, path, this.addCounterToCell, payload);
  }

  applyPathActionToTable(table, path, action, payload = {}) {
    if (!table) {
      console.log("table not found");
      return;
    }

    if (!path || path.length === 0) {
      console.log("path is empty");
      return;
    }

    let counter = 0;
    path.forEach((element) => {
      if (!element || element.length != 2) {
        console.log("unexpected element in path");
        console.log(path);
        return;
      }

      counter++;

      //eg (2,1)
      // 2 is the second cell because these references start at 1
      // 1 is the last row
      // TODO this will depend on the min values, do we really need them?

      const xValue = element[0];
      const yValue = element[1];

      const rowLength = table.rows.length;

      const rowIndex = rowLength - yValue;
      const cellIndex = xValue - 1;

      const cell = table.rows[rowIndex].cells[cellIndex];

      console.log("here is this in applypathactiontotable");
      console.log(this);

      action(cell, counter, payload);
    });
  }

  applyActionToAllTableCells(table, action, payload = {}) {
    if (!table) {
      console.log("table not found");
      return;
    }

    const numRows = table.rows.length;
    for (let rowIndex = numRows; rowIndex >= 1; rowIndex--) {
      for (
        let cellIndex = 1;
        cellIndex <= this.grid.MAX_BOARD_X_COORD;
        cellIndex++
      ) {
        const cell = table.rows[rowIndex - 1].cells[cellIndex - 1];
        if (!cell) {
          throw new Error("cell not found");
        }
        //payload.gridReference = `poo`;

        payload.gridReference = `[${cellIndex}, ${numRows - rowIndex + 1}]`;
        action(cell, payload);
      }
    }
  }

  removeChildren(cell) {
    while (cell.firstChild) {
      cell.removeChild(cell.firstChild);
    }
  }

  removeAnimationFromCell(cell) {
    this.animationCSSClasses.forEach((className) => {
      console.log(`removing ${className}`);

      if (cell.classList.contains(className)) {
        cell.classList.remove(className);
      }
    });
  }

  addAnimationToCell(cell, counter, payload) {
    const time = payload.speed * counter;
    const className = payload.className;

    if (!time || !className) {
      throw new Error("payload must include speed and className");
    }

    setTimeout(() => {
      cell.classList.toggle(className);
    }, time);
  }

  addGridReferenceLabelToCell(cell, payload = {}) {
    // TODO add a dom child
    const span = document.createElement("span");
    span.innerText = ` (${payload.gridReference})`;
    span.classList.add("label");
    cell.appendChild(span);
  }

  // addLabelToCell(cell, label, payload = {}) {
  //   // TODO add a dom child
  //   const span = document.createElement("span");
  //   span.innerText = ` (${label})`;
  //   span.classList.add("label");
  //   cell.appendChild(span);
  // }

  addCounterToCell(cell, counter) {
    // TODO add a dom child
    // this is the same as ad label to cell except for the class, why is it duplicated?
    const span = document.createElement("span");
    span.innerText = ` (${counter})`;
    span.classList.add("counter");
    cell.appendChild(span);
  }

  animatePath(table, path, speed, className) {
    const payload = { speed, className };

    // ok we have a binding problem.

    this.applyPathActionToTable(
      table,
      path,
      this.addAnimationToCell.bind(this),
      payload
    );

    // add extra classes to the first and the last fields
    this.applyPathActionToTable(
      table,
      [path[0]],
      this.addAnimationToCell.bind(this),
      { ...payload, className: this.CSS_CLASS_FIRST }
    );

    this.applyPathActionToTable(
      table,
      [path[path.length - 1]],
      this.addAnimationToCell.bind(this),
      { ...payload, className: this.CSS_CLASS_LAST }
    );
  }

  animateVisited(table, path, speed) {
    this.animatePath(table, path, speed, this.CSS_CLASS_VISITED);
  }

  animateQueued(table, path, speed) {
    this.animatePath(table, path, speed, this.CSS_CLASS_QUEUED);
  }

  animateBacktracked(table, path, speed) {
    this.animatePath(table, path, speed, this.CSS_CLASS_BACKTRACKED);
  }

  displayPathLabels(table, path) {
    this.applyPathActionToTable(table, path, this.addCounterToCell);
  }

  getTableRepresentation() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    // creating all cells
    for (let i = this.grid.MAX_BOARD_Y_COORD; i >= 1; i--) {
      // creates a table row
      const row = document.createElement("tr");

      for (let j = 1; j <= this.grid.MAX_BOARD_X_COORD; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        //this.addLabelToCell(cell, `[${j},${i}]`);

        if (this.hasObstacle([j, i])) cell.classList.add("obstacle");

        row.appendChild(cell);
      }

      // add the row to the end of the table body
      tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);

    return tbl;
  }

  turnOnGridLabels(table, showLabels) {
    this.applyActionToAllTableCells(table, this.addGridReferenceLabelToCell);
  }

  clearGrid(table, showLabels) {
    this.applyActionToAllTableCells(
      table,
      this.removeAnimationFromCell.bind(this)
    );
    this.applyActionToAllTableCells(table, this.removeChildren);
    if (showLabels) {
    }
  }
}
