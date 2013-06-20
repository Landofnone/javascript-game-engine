// Tiles
function Tiles(size, tileData, image) {
  this.size = size || 0;
  this.tileData = tileData || [];
  this.image = image || null;
}

Tiles.prototype.getTile = function(index) {
  var tilesPerRow = this.tileData[0].length
   
  var row = Math.floor(index / tilesPerRow);
  var column = index % tilesPerRow;
  var tile = this.tileData[row][column];
  
  return tile;
}