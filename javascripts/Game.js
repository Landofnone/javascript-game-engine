// Game
function Game(canvasId) {
  // Refresh (ms)
  this.refresh = 15;

  // Display
  this.display = new Display(canvasId);

  // AssetManager
  this.assetManager = new AssetManager("images/desert_tiles.png", 32, 1);

  // Go time
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

  // Input
  this.input = new Input();

  // Monitor
  this.frameRateMonitor = new FrameRateMonitor(this.display);

  // Camera
  // Too tightly coupled
  this.camera = new Camera(
    {
      x: 0,
      y: 0,
      width: this.display.canvas.width,
      height: this.display.canvas.height
    },
    this.assetManager.mapSize,
    this.input
  );

  // Map Renderer
  this.mapRenderer = new MapRenderer(
    this.assetManager.mapData, 
    this.assetManager.tileData, 
    this.camera.view, 
    this.display.context
  );

  this.loop();
}

Game.prototype.loop = function() {
  // Reset
  this.display.clear();

  // Render
  this.mapRenderer.render();

  // Render / Update
  this.frameRateMonitor.update();

  // Loops
  setTimeout((function (self) {
    return function() { self.loop() } 
  })(this), this.refresh);
}