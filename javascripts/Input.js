// input
function Input() {
	
	// Track the current state of each control
  this.controlsActive = {
    up: false,
    down: false,
    left: false,
    right: false
  };

	this.keys = {
    38: "up",
    40: "down",
    37: "left",
    39: "right"
  }
  
  this.listeners = {
    keydown: {
      eventName: "keydown",
      isActive: true
    },
    keyup: {
      eventName: "keyup",
      isActive: false
    }
  };
  
  this.addKeyboardListeners();
}

Input.prototype.checkKeyboardInput = function(evt, isActive) {
	// Look up our key
  var key = this.keys[evt.keyCode]
	
	// If this is a key we're monitoring, set it's active state
  if (key) { this.controlsActive[key] = isActive; }
}

Input.prototype.addKeyboardListeners = function() {      
  // Listen for all defined key events      
  for (listener in this.listeners) {
    document.addEventListener(
      this.listeners[listener].eventName, 
      (function(self, isActive) {
        return function(evt) { self.checkKeyboardInput(evt, isActive); }
      })(this, this.listeners[listener].isActive),
      false);
  }
}