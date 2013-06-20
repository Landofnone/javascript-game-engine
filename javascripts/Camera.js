// Camera
function Camera(view, mapSize, input) {
  this.frequency = 6;
  this.cameraSpeed = 1;

  this.view = {
    x: view.x,
    y: view.y,
    w: view.width,
    h: view.height
  }
  
  this.mapSize = mapSize;
  this.input = input;
  this.respondToInput();
}

Camera.prototype.moveView = function(dx, dy) {
  // Changes
  var dx = dx || 0;
  var dy = dy || 0;

  // Update
  this.view.x += dx;
  this.view.y += dy;

  // Update with bounds checking
  this.view.x = Math.max(this.view.x, 0);
  this.view.x = Math.min(this.view.x, this.mapSize.width - this.view.w);
  this.view.y = Math.max(this.view.y, 0);
  this.view.y = Math.min(this.view.y, this.mapSize.height - this.view.h);
};

Camera.prototype.respondToInput = function() {
  var self = this,
      deltaX = this.cameraSpeed,
      deltaY = this.cameraSpeed;
  
  setInterval(
    function() {
      if (self.input.input.up)     { self.moveView(0, -deltaY); }
      if (self.input.input.down)   { self.moveView(0, deltaY); }
      if (self.input.input.left)   { self.moveView(-deltaX, 0); }
      if (self.input.input.right)  { self.moveView(deltaX, 0); }
    },
    this.frequency
  );
}