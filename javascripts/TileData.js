// Tiles
function TileData(size, tiles, image) {
  this.size = size || 0;
  this.tiles = tiles || [];
  this.image = image || null;
}

TileData.prototype.getTile = function(index) {
  var tilesPerRow = this.tiles[0].length
   
  var row = Math.floor(index / tilesPerRow);
  var column = index % tilesPerRow;
  var tile = this.tiles[row][column];
  
  return tile;
}