// input
function Input() {
  this.input = {
    up: false,
    down: false,
    left: false,
    right: false
  };
  
  this.listeners = {
    keydown: {
      eventName: "keydown",
      isDown: true
    },
    keyup: {
      eventName: "keyup",
      isDown: false
    }
  };
  
  this.addKeyboardListeners();
}

Input.prototype.checkKeyboardInput = function(evt, isDown) {
  var keyPressed = evt.keyCode;
  
  var keys = {
    38: "up",
    40: "down",
    37: "left",
    39: "right"
  }

  var key = keys[keyPressed]
  if (key) { this.input[key] = isDown; }
}

Input.prototype.addKeyboardListeners = function() {      
  // Listen for all defined key events      
  for (listener in this.listeners) {
    document.addEventListener(
      this.listeners[listener].eventName, 
      (function(self, isDown) {
        return function(evt) { self.checkKeyboardInput(evt, isDown); }
      })(this, this.listeners[listener].isDown),
      false);
  }
}