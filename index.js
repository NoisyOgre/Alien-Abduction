const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

const icon = new Icon(50, 50);
// let score = 0;
// let cursorCost = 0;
// let cursors = 0;

function updateCanvas() {
  icon.draw();
  requestAnimationFrame(updateCanvas);
}

updateCanvas();

canvas.addEventListener("click", (e) => {
  const coord = {
    x: e.clientX,
    y: e.clientY,
  };
  if (checkClickIcon(coord)) {
    console.log("x", e.clientX);
    console.log("y", e.clientY);
    console.log("clikinng icon");
    score++;
    scoreElement.innerHTML = score;
  }
});

function checkClickIcon(mouseCoordinates) {
  console.log(icon);
  return !(
    mouseCoordinates.x > icon.right() ||
    mouseCoordinates.x < icon.left() ||
    mouseCoordinates.y > icon.bottom() ||
    mouseCoordinates.y < icon.top()
  );
}

const scoreElement = document.getElementById("score");
    icon.onclick = function() {
	score++;
    scoreElement.innerHTML = score;
}