function getCellLabelSetting() {
  const cellLabelSettings = document.querySelector(
    "#cell-label-setting-select"
  ).selectedOptions;

  if (!cellLabelSettings || cellLabelSettings.length === 0)
    throw new Error("No cell label setting selected");

  return cellLabelSettings[0].value;
}

function getGridSettingsName() {
  const gridStrategies = document.querySelector(
    "#grid-strategy-select"
  ).selectedOptions;

  if (!gridStrategies || gridStrategies.length === 0)
    throw new Error("No grid strategy selected");

  return gridStrategies[0].value;
}

function getSearchStrategy() {
  return document.querySelector('input[name="searchType"]:checked').value;
}

function getSearchCoordinates() {
  const startCoordX = parseInt(document.querySelector("#startingCellX").value);
  const startCoordY = parseInt(document.querySelector("#startingCellY").value);
  const endCoordX = parseInt(document.querySelector("#destinationCellX").value);
  const endCoordY = parseInt(document.querySelector("#destinationCellY").value);

  return {
    start: {
      x: startCoordX,
      y: startCoordY,
    },
    end: {
      x: endCoordX,
      y: endCoordY,
    },
  };
}

function getAnimationSpeed() {
  const animationSpeed = parseInt(
    document.querySelector("#animationSpeed").value
  );
  return animationSpeed;
}
