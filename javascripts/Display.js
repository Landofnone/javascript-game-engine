// Display
function Display(canvasId) {
  // Set up the canvas
  this.canvas = document.getElementById(canvasId);
  this.context = (this.canvas && this.canvas.getContext) ? this.canvas.getContext("2d") : null;

  // Font
  this.context.font = 'bold 20px sans-serif';
  this.context.fillStyle = "#000000";
  this.context.textBaseline = 'top';
}

Display.prototype.clear = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Display.prototype.displayText = function(text, x, y) {
  this.context.fillText(text, x, y);
}