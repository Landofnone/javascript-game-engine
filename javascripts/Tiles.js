// Tiles
function Tiles(tileData, size, image) {
  this.tileData = tileData || [];
  this.size = size || 0;
  this.image = image || null;
}

Tiles.prototype.getTile = function(index) {
  var tilesPerRow = this.tileData[0].length 
  var row = Math.floor(index / tilesPerRow);
  var column = index % tilesPerRow;

  var tile = this.tileData[row][column];
	
  return tile;
}