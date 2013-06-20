// Monitor
function FrameRateMonitor(display) {
  //Position
  this.position = { x: 10, y: 10 };
       
  // Frames
  this.framesPerSecond = 0;
  this.frameCount = 0;

  // Timers and delta
  this.timeCount = 0;
  this.time = this.oldTime = Date.now();

  // Display to render to
  this.display = display;
}

// Update
FrameRateMonitor.prototype.update = function() {
  this.calculateFramesPerSecond();
  this.render();      
}

// Calculate the frames per second
FrameRateMonitor.prototype.calculateFramesPerSecond = function() {
  // Increment the frames
  this.frameCount += 1;

  // Update timers
  this.updateTimers();
  
  // We've reached one second, reset the timer and frame count
  // First, capture the number of frames per second
  if (this.timeCount > 1000) {
    this.timeCount -= 1000;
    this.framesPerSecond = this.frameCount;
    this.frameCount = 0;
  }
}

// UpdateTimers
FrameRateMonitor.prototype.updateTimers = function() {
  this.timeCount += this.time - this.oldTime;
  this.oldTime = this.time;
  this.time = Date.now();
}

// Render
FrameRateMonitor.prototype.render = function() {
  this.display.displayText(this.framesPerSecond + "", this.position.x, this.position.y);
}