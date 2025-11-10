console.clear();

const svg = document.querySelector("#svg");
const img = document.querySelector("#img");
const circle = document.querySelector("#circle");
const pad = 4;

let radius = +circle.getAttribute("r");
let imgWidth, imgHeight;

gsap.set(img, {
  scale: 2,
  xPercent: -50,
  yPercent: -50
});

var tl = gsap.timeline({
    scrollTrigger: {    
      start: "top top",
      end: "bottom bottom",
      scrub: 0.2,
    },
    defaults: {
      duration: 1
    }
  })
  .to(circle, {
    attr: {
      r: () => radius
    }
  }, 0)
  .to(img, {
    scale: 1,
  }, 0)
  .to("#whiteLayer", {
    alpha: 0,
    ease: "power1.in",
    duration: 1 - 0.25
  }, 0.25);
  
window.addEventListener("load", init);
window.addEventListener("resize", resize);

function init() {
      
  imgWidth = img.naturalWidth;
  imgHeight = img.naturalHeight;
    
  resize();  
}

function resize() {
    
  tl.progress(0);
  
  const r = svg.getBoundingClientRect();
  const rectWidth = r.width + pad;
  const rectHeight = r.height + pad;
  
  const rx = rectWidth / imgWidth;
  const ry = rectHeight / imgHeight;
  
  const ratio = Math.max(rx, ry);
  
  const width = imgWidth * ratio;
  const height = imgHeight * ratio;
    
  const dx = rectWidth / 2;
  const dy = rectHeight / 2;
  radius = Math.sqrt(dx * dx + dy * dy);
            
  gsap.set(img, { width, height });
    
  tl.invalidate();
  
  ScrollTrigger.refresh();
}


var colour = "#ff00f0";
var sparkles = 120;
var x = 400, y = 300;
var swide = window.innerWidth, shigh = window.innerHeight;
var sleft = 0, sdown = 0;
var tiny = [], star = [], starv = [], starx = [], stary = [];
var tinyx = [], tinyy = [], tinyv = [];

function initializeSparkles() {
for (var i = 0; i < sparkles; i++) {
tiny[i] = createDiv(3, 3);
tiny[i].style.visibility = "hidden";
document.body.appendChild(tiny[i]);
tinyv[i] = 0;

star[i] = createDiv(5, 5);
star[i].style.visibility = "hidden";
var rlef = createDiv(1, 5);
var rdow = createDiv(5, 1);
star[i].appendChild(rlef);
star[i].appendChild(rdow);
rlef.style.top = "2px";
rlef.style.left = "0px";
rdow.style.top = "0px";
rdow.style.left = "2px";
document.body.appendChild(star[i]);

starv[i] = 0;
}

document.onmousemove = trackMouse;
setInterval(sparkle, 40);
}

function trackMouse(e) {
x = e.clientX + window.scrollX;
y = e.clientY + window.scrollY;
}

function sparkle() {
for (var i = 0; i < sparkles; i++) {
if (!starv[i]) {
  star[i].style.left = (starx[i] = x) + "px";
  star[i].style.top = (stary[i] = y) + "px";
  star[i].style.visibility = "visible";
  starv[i] = 50;
  break;
}
}

for (var i = 0; i < sparkles; i++) {
if (starv[i]) updateStar(i);
if (tinyv[i]) updateTiny(i);
}
}

function updateStar(i) {
if (--starv[i] === 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
if (starv[i]) {
stary[i] += 1 + Math.random() * 3;
if (stary[i] < shigh) {
  star[i].style.top = stary[i] + "px";
  starx[i] += (i % 5 - 2) / 5;
  star[i].style.left = starx[i] + "px";
} else {
  star[i].style.visibility = "hidden";
  starv[i] = 0;
}
} else {
tinyv[i] = 50;
tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
tiny[i].style.width = "2px";
tiny[i].style.height = "2px";
star[i].style.visibility = "hidden";
tiny[i].style.visibility = "visible";
}
}
const change = src => {
  document.getElementById('main').src = src
}

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("containerbox");
  const svg = document.getElementById("svg");
  const box = document.getElementById("box1");

  const projects = [
    "proj1", "proj2", "proj3", "proj4", "proj5", "proj6"
  ].map(id => document.getElementById(id));

  function getCenterPercent(el) {
    const rect = el.getBoundingClientRect();
    const parentRect = container.getBoundingClientRect();
    const x = ((rect.left + rect.width / 2 - parentRect.left) / parentRect.width) * 100;
    const y = ((rect.top + rect.height / 2 - parentRect.top) / parentRect.height) * 100;
    return { x, y };
  }

  function drawLine(fromEl, toEl) {
    const from = getCenterPercent(fromEl);
    const to = getCenterPercent(toEl);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", `${from.x}%`);
    line.setAttribute("y1", `${from.y}%`);
    line.setAttribute("x2", `${to.x}%`);
    line.setAttribute("y2", `${to.y}%`);
    line.setAttribute("stroke", "#ff00f0");
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);
  }

  function drawAllLines() {
    svg.innerHTML = ""; // clear old lines
    projects.forEach(proj => drawLine(box, proj));
  }

  // Initial draw and on resize
  drawAllLines();
  window.addEventListener("resize", () => setTimeout(drawAllLines, 100));
});


  const projects = document.querySelectorAll('.project');
  const line = document.getElementById('line-connector');

  projects.forEach(project => {
    const preview = project.querySelector('.preview');

    project.addEventListener('mouseenter', () => {
      const projectRect = project.getBoundingClientRect();
      const previewRect = preview.getBoundingClientRect();
      const svgRect = document.getElementById('hover-line').getBoundingClientRect();

      // Calculate the center of the project box
      const startX = projectRect.left + projectRect.width / 2 - svgRect.left;
      const startY = projectRect.top + projectRect.height / 2 - svgRect.top;

      // Calculate the center of the preview box
      const endX = previewRect.left + previewRect.width / 2 - svgRect.left;
      const endY = previewRect.top + previewRect.height / 2 - svgRect.top;

      // Set the line positions
      line.setAttribute('x1', startX);
      line.setAttribute('y1', startY);
      line.setAttribute('x2', endX);
      line.setAttribute('y2', endY);

      line.style.display = 'block';
    });

    project.addEventListener('mouseleave', () => {
      line.style.display = 'none';
    });
  });
  function stars() {
    let e = document.createElement("div");
    e.setAttribute("class", "star");
    document.body.appendChild(e);
    e.style.left = Math.random() * +innerWidth + "px";
  
    let size = Math.random() * 2;
    let duration = Math.random() * 3;
  
    e.style.fontSize = 16 + "px";
    e.style.animationDuration = 4 + duration + "s";
    setTimeout(function () {
      document.body.removeChild(e);
    }, 10000);
  }
  
  setInterval(function () {
    stars();
  }, 500);
  
