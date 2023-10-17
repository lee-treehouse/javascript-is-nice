class PathVisualiser {
  seekTable;
  pathTable;
  grid;

  constructor(grid) {
    this.grid = grid;
  }

  hasObstacle(coord) {
    return this.grid.isCellBlockedOrOutOfBounds(coord);
  }

  addPathToTable(table, path) {
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

      cell.innerHTML += ` <span class="counter">(${counter})</span>`;
    });
  }

  generateTableAndLabel(labelText) {
    const label = document.createElement("h1");
    label.innerText = labelText;
    document.body.appendChild(label);

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
        cell.innerHTML = ` <span class="label">[${j},${i}]</span>`;

        //const cellText = document.createTextNode(`[${j},${i}]`);

        if (this.hasObstacle([j, i])) cell.classList.add("obstacle");

        //cell.appendChild(cellText);
        row.appendChild(cell);
      }

      // add the row to the end of the table body
      tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);

    if (!document.body) {
      console.log("no reference to document.body");
    }

    // appends <table> into <body>
    return document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    // tbl.setAttribute("border", "1");
  }

  generateTables() {
    this.seekTable = this.generateTableAndLabel("Search space");
    this.pathTable = this.generateTableAndLabel("Path after backtracking");
  }

  addVisitedAndPath(path) {
    this.addPathToTable(this.seekTable, path.visited);
    this.addPathToTable(this.pathTable, path.path);
  }
}
