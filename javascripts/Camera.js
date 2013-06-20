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

Camera.prototype.respondToInput = function() {
  var self = this,
      deltaX = this.cameraSpeed,
      deltaY = this.cameraSpeed;
  
  setInterval(
    function() {
      if (self.input.controlsActive.up)     { self.moveView(0, -deltaY); }
      if (self.input.controlsActive.down)   { self.moveView(0, deltaY); }
      if (self.input.controlsActive.left)   { self.moveView(-deltaX, 0); }
      if (self.input.controlsActive.right)  { self.moveView(deltaX, 0); }
    },
    this.frequency
  );
}

Camera.prototype.moveView = function(dx, dy) {
  // Update
  this.view.x += dx;
  this.view.y += dy;

	// Checkbounds
	this.checkBounds();
}

Camera.prototype.checkBounds = function () {
	this.checkLeftBounds();
	this.checkRightBounds();
	this.checkTopBounds();
	this.checkBottomBounds();
}

Camera.prototype.checkLeftBounds = function() {
  this.view.x = Math.max(this.view.x, 0);	
}

Camera.prototype.checkRightBounds = function() {
  this.view.x = Math.min(this.view.x, this.mapSize.width - this.view.w);	
}

Camera.prototype.checkTopBounds = function() {
  this.view.y = Math.max(this.view.y, 0);	
}

Camera.prototype.checkBottomBounds = function() {
  this.view.y = Math.min(this.view.y, this.mapSize.height - this.view.h);
}