// MapRenderer
function MapRenderer(map, tiles, view, context) {
  this.map  = map   || null;
  this.tiles = tiles  || null;
  this.view     = view      || null;
  this.context  = context   || null;
}

MapRenderer.prototype.render = function(context) {
  // Loop over all the tiles
  for (var row = this.startRow(); row < this.endRow(); ++row) {
    for (var column = this.startColumn(); column < this.endColumn(); ++column) {
      this.renderTileAt(row, column);
    }    
  }
}



//
// Helpers (could be private)
//

MapRenderer.prototype.renderTileAt = function(row, column) {

  // Get the right tile at x, y
  var tile = this.map.getDataAt(row, column);
  tile = this.tiles.getTile(tile);
    
  // image, clipping coordinates and size, canvas coordinates and size
  this.context.drawImage(
    this.tiles.image,

    tile.x, 
    tile.y, 
    this.tiles.size, 
    this.tiles.size, 

    (column * this.tiles.size) - Math.floor(this.view.x), 
    (row * this.tiles.size) - Math.floor(this.view.y), 
    this.tiles.size, 
    this.tiles.size
  );

}

MapRenderer.prototype.startRow = function() {
  return Math.max(Math.floor(this.view.y / this.tiles.size), 0);
}

MapRenderer.prototype.endRow = function() {
  return Math.min(Math.floor((this.view.y + this.view.h) / this.tiles.size) + 1, this.map.rows);
}

MapRenderer.prototype.startColumn = function() {
  return Math.max(Math.floor(this.view.x / this.tiles.size), 0);
}

MapRenderer.prototype.endColumn = function() {
	// find the xth column based on the current view location
  var temp = Math.floor((this.view.x + this.view.w) / this.tiles.size) + 1;
  return Math.min(temp, this.map.columns);
}