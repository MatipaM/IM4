const canvas = document.getElementById('myCanvas');


canvas.width = 500;
canvas.height = 500;

const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  
  canvas.addEventListener('mousemove', draw);
  
  canvas.addEventListener('mouseup', () => {
    isDrawing = false;
  });

  const colorSelector = document.getElementById('colorSelector');
const brushSelector = document.getElementById('brushSelector');

let brushSize = brushSelector.value;
let brushType = 'round';

colorSelector.addEventListener('change', () => {
  ctx.strokeStyle = colorSelector.value;
});

brushSelector.addEventListener('change', () => {
  brushSize = brushSelector.value;
  brushType = 'round';
  ctx.lineWidth = brushSize;
ctx.lineCap = brushType;
});

createFooter();



