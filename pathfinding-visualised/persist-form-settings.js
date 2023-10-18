function saveCellLabelSetting(cellLabelSetting) {
  localStorage.setItem("cellLabelSetting", cellLabelSetting);
}

function saveAnimationSpeed(speed) {
  localStorage.setItem("animationSpeed", speed);
}

function saveGridSettingsName(gridStrategy) {
  localStorage.setItem("gridStrategy", gridStrategy);
}

function saveSearchCoordinates(coords) {
  localStorage.setItem("startCoordX", coords.start.x);
  localStorage.setItem("startCoordY", coords.start.y);
  localStorage.setItem("endCoordX", coords.end.x);
  localStorage.setItem("endCoordY", coords.end.y);
}
