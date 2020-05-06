var cvs = document.querySelector("canvas");
var ctx = cvs.getContext("2d");
var drawing = false;
var oldX = 0;
var oldY = 0;
ctx.strokeStyle = "#F00";
cvs.addEventListener("mousedown", e => {
  drawing = true;
  oldX = e.offsetX;
  oldY = e.offsetY;
});
cvs.addEventListener("mouseup", e => {
  drawing = false;
});
cvs.addEventListener("mousemove", e => {
  if (!drawing) return false;
  ctx.beginPath();
  ctx.moveTo(oldX, oldY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  oldX = e.offsetX;
  oldY = e.offsetY;
});
