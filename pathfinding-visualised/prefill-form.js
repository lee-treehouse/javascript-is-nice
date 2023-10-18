function presetFormFields() {
  const animationSpeed = localStorage.getItem("animationSpeed");
  if (animationSpeed) {
    document.querySelector("#animationSpeed").value = animationSpeed;
  }

  const startCoordX = localStorage.getItem("startCoordX");
  if (startCoordX) {
    document.querySelector("#startingCellX").value = startCoordX;
  }

  const endCoordX = localStorage.getItem("endCoordX");
  if (endCoordX) {
    document.querySelector("#destinationCellX").value = endCoordX;
  }

  const startCoordY = localStorage.getItem("startCoordY");
  if (startCoordY) {
    document.querySelector("#startingCellY").value = startCoordY;
  }

  const endCoordY = localStorage.getItem("endCoordY");
  if (endCoordY) {
    document.querySelector("#destinationCellY").value = endCoordY;
  }

  const gridStrategy = localStorage.getItem("gridStrategy");
  if (gridStrategy) {
    const select = document.querySelector("#grid-strategy-select");

    for (const option of select.options) {
      if (option.value === gridStrategy) option.selected = true;
    }
  }

  const cellLabelSetting = localStorage.getItem("cellLabelSetting");
  if (cellLabelSetting) {
    const select = document.querySelector("#cell-label-setting-select");

    for (const option of select.options) {
      if (option.value === cellLabelSetting) option.selected = true;
    }
  }
}
