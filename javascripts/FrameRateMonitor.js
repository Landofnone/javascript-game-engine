// Monitor
function FrameRateMonitor(display) {
  // Display to render to
  this.display = display;

  //Position
  this.position = { x: 10, y: 10 };
       
  // Frames
  this.framesPerSecond = 0;
  this.frameCount = 0;
	
  // Timers and delta
  this.timeCount = 0; 
  this.time = this.oldTime = Date.now();
}

// Update
FrameRateMonitor.prototype.update = function() {
  this.updateTimers();
  this.calculateFramesPerSecond();
  this.render();      
}

// Calculate the frames per second
FrameRateMonitor.prototype.calculateFramesPerSecond = function() {
  // Increment the frames
  this.frameCount += 1;

  // We've reached one second, reset the timer and frame count
  // First, capture the number of frames per second
  if (this.timeCount > 1000) {

		// Grab our frames per second before we reset
    this.framesPerSecond = this.frameCount;
		this.reset();
  }
}


// Reset
FrameRateMonitor.prototype.reset = function() {
  this.timeCount -= 1000;
  this.frameCount = 0;
}

// UpdateTimers
FrameRateMonitor.prototype.updateTimers = function() {
  this.timeCount += this.time - this.oldTime;
  this.oldTime = this.time;
  this.time = Date.now();
}

// FrameRateMonitor
FrameRateMonitor.prototype.text = function() {
	return "" + this.framesPerSecond;
}

// Render
FrameRateMonitor.prototype.render = function() {
  this.display.displayTextAtPosition(this.text(), this.position);
}

