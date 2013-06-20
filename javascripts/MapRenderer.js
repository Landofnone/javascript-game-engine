// MapRenderer
function MapRenderer(mapData, tileData, view, context) {
  this.mapData  = mapData   || null;
  this.tileData = tileData  || null;
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

MapRenderer.prototype.startRow = function() {
  return Math.max(Math.floor(this.view.y / this.tileData.size), 0);
}

MapRenderer.prototype.endRow = function() {
  return Math.min(Math.floor((this.view.y + this.view.h) / this.tileData.size) + 1, this.mapData.height);
}

MapRenderer.prototype.startColumn = function() {
  return Math.max(Math.floor(this.view.x / this.tileData.size), 0);
}

MapRenderer.prototype.endColumn = function() {
  var temp = Math.floor((this.view.x + this.view.w) / this.tileData.size) + 1; // find the xth column based on the current view location
  return Math.min(temp, this.mapData.width);
}

MapRenderer.prototype.renderTileAt = function(row, column) {

  // Get the right tile at x, y
  var tile = this.mapData.getTileAt(row, column);
  tile = this.tileData.getTile(tile);
    
  // image, clipping coordinates, canvas coordinates
  this.context.drawImage(
    this.tileData.image,

    tile.x, 
    tile.y, 
    this.tileData.size, 
    this.tileData.size, 

    (column * this.tileData.size) - Math.floor(this.view.x), 
    (row * this.tileData.size) - Math.floor(this.view.y), 
    this.tileData.size, 
    this.tileData.size
  );
  
}