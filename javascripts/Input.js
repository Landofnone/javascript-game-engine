// input
function Input() {
	this.initializeControls();
	this.initializeKeys();
	this.initializeKeyListeners();	
  this.addKeyListeners();
}

Input.prototype.initializeControls = function() {
  this.controlsActive = {
    up: false,
    down: false,
    left: false,
    right: false
  };	
}

Input.prototype.initializeKeys = function() {
	this.keys = {
    38: "up",
    40: "down",
    37: "left",
    39: "right"
  }	
}

Input.prototype.initializeKeyListeners = function() {
	// What input should we listen to?
	// What constitutes actice and inactive?
  this.keyListeners = {
    keydown: {
      eventName: "keydown",
      isActive: true
    },
    keyup: {
      eventName: "keyup",
      isActive: false
    }
  }	
}

Input.prototype.addKeyListeners = function() {      
  // Listen for all defined key events      
  for (listener in this.keyListeners) {
    document.addEventListener(
      this.keyListeners[listener].eventName, 
      (function(self, isActive) {
        return function(evt) { self.checkKeyInput(evt, isActive); }
      })(this, this.keyListeners[listener].isActive),
      false);
  }
}

Input.prototype.checkKeyInput = function(evt, isActive) {
	// Look up our key
  var key = this.keys[evt.keyCode]
	
	// If this is a key we're monitoring, set it's active state
  if (key) { this.controlsActive[key] = isActive; }
}