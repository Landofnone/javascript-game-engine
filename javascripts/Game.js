// Game
function Game(canvasId) {
  this.refresh = 15;
  this.display = new Display(canvasId);

  // This looks like a level description
  // I should probably make a level class/object to hold the data
  this.assetManager = new AssetManager("images/desert_tiles.png", 32, 1);

  // Refactor to assetManager?
  this.startWhenAssetsAreLoaded();
}

// Move this to the asset manager or assets
Game.prototype.startWhenAssetsAreLoaded = function() {
  if (this.display.context !== null) {
    this.assetManager.image.addEventListener(
      'load',
      (function (self) {
        return function(evt) {
          self.start();
        }
      })(this), 
      false
    );
  }  
}

Game.prototype.start = function () {
  // Load the remaining assets
  this.assetManager.loadAssets();  
  this.input = new Input();
  this.frameRateMonitor = new FrameRateMonitor(this.display);

  // Too tightly coupled
  this.camera = new Camera(
    {
      x: 0,
      y: 0,
      width: this.display.canvas.width,
      height: this.display.canvas.height
    },
    this.assetManager.map,
    this.input
  );

  // Map Renderer
  this.mapRenderer = new MapRenderer(
    this.assetManager.map, 
    this.assetManager.tiles, 
    this.camera.view, 
    this.display.context
  );

  this.loop();
}

Game.prototype.loop = function() {
  this.display.clear();
  this.mapRenderer.render();
  this.frameRateMonitor.update();

  // Loops
  setTimeout((function (self) {
    return function() { self.loop() } 
  })(this), this.refresh);
}