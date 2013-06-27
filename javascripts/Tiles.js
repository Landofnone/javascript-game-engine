// Tiles
function Tiles(image, size, borderSize) {
  this.image = image || null;
  this.size = size || 0;
  this.borderSize = borderSize;

  this.tileData = this.load();
}

Tiles.prototype.getTile = function(index) {
  var tilesPerRow = this.tileData[0].length;
  var row = Math.floor(index / tilesPerRow);
  var column = index % tilesPerRow;

  var tile = this.tileData[row][column];
	
  return tile;
}

Tiles.prototype.load = function() {
  var tiles = [],
      tileRow = [];

  for (var y = this.borderSize; y < this.image.height; y = y + this.size + this.borderSize) {
    tileRow = [];

    for (var x = this.borderSize; x < this.image.width; x = x + this.size + this.borderSize) {
      tileRow.push({
        x: x, 
        y: y, 
        w: this.size, 
        h: this.size
      });
    }

    tiles.push(tileRow);
  }

  return tiles;
}