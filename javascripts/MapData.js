// MapData
function MapData(tiles) {
  this.tiles = tiles || [];
  this.height = tiles.length || 0;
  this.width = tiles[0].length || 0;
}

MapData.prototype.getTileAt = function(y, x) {
  return this.tiles[y][x];
};