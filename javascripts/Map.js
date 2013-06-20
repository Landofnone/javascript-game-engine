// Map
function Map(mapData, tileSize) {
  this.mapData = mapData || [];
	this.tileSize = tileSize;

  this.rows = mapData.length || 0;
  this.columns = mapData[0].length || 0;

	this.size = {
		width: this.columns * this.tileSize,
		height: this.rows * this.tileSize
	}	
}

Map.prototype.getDataAt = function(y, x) {
  return this.mapData[y][x];
};