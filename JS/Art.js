let h1 = document.createElement("h1");
h1.innerText = "Internet (Code) Art";

main.append(h1);

// let container = document.createElement("section");
// container.classList.add("container");

// main.append(container);

let div = document.createElement("div");
div.setAttribute('id', 'toolbar');

main.append(div);

let h2 = document.createElement("h2");
h2.innerText = "Draw :)";
div.append(h2);

let label = document.createElement("label");
label.setAttribute('for', 'stroke')
label.innerText = "Stroke";

let input = document.createElement("input");
input.setAttribute('id', 'stroke');
input.setAttribute('name', 'stroke');
input.setAttribute('type', 'color');

let label2 = document.createElement("label");
label2.innerText = "Line Width";

let input2 = document.createElement("input");
input2.setAttribute('id', 'lineWidth');
input2.setAttribute('name', 'lineWidth');
input2.setAttribute('type', 'number');
input2.setAttribute('value', '5');

let p = document.createElement("p");
p.innerText = 'Refresh page to clear canvas';

let div2 = document.createElement("div");
div2.classList.add("drawingBoard");
let canvas2 = document.createElement("canvas");
canvas2.setAttribute('id', 'drawingBoard');
div2.append(canvas2); 


// let items = [label, input, label2, input2,p, div2];

let items = [p, div2];

for(let i=0; i<items.length; i++)
{
    main.append(items[i]);
}

const canvas = document.getElementById('drawingBoard');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft-110;
const canvasOffsetY = canvas.offsetTop -300;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

toolbar.addEventListener('change', e => {
    if(e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }

    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
    
});

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);

