function saveAnimationSpeed(speed) {
  localStorage.setItem("animationSpeed", speed);
}

function saveSearchType(searchType) {
  localStorage.setItem("searchType", searchType);
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
