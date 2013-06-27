// AssetManager
function AssetManager(imageURL, tileSize, tileBorderSize) {  
  // Tile attributes
  this.tileSize = tileSize || 32;
  this.tileBorderSize = tileBorderSize || 0;

  // Images
  this.imageURL = imageURL || "";
  this.image = this.loadImage(imageURL);
}

AssetManager.prototype.loadAssets = function() {
  this.tiles = new Tiles(this.image, this.tileSize, this.tileBorderSize);
  this.map = new Map(this.tileSize); // shouldn't this also add tileBorderSize?
}

AssetManager.prototype.loadImage = function() {
  var image = new Image();
  image.src = this.imageURL;
  return image;
}