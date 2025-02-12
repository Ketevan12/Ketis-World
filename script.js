
window.onload = function () {
  showSplashScreen();
  startImageFlicker();
};


let isImageOne = true;
function startImageFlicker() {
  const flickeringImage = document.getElementById('flickering-image');
  setInterval(() => {
    flickeringImage.src = isImageOne ? "pixil-frame-1.png" : "pixil-frame-0.png";
    isImageOne = !isImageOne;
  }, 500);
}

function removeSplash() {
  const splash = document.getElementById('splash');
  splash.style.animation = 'fadeOut 1s ease-in-out';
  setTimeout(() => splash.remove(), 2000);
}

function removeSplash() {
    const splash = document.getElementById('splash');
    splash.style.animation = 'fadeOut 1s ease-in-out';
    setTimeout(() => splash.style.display = "none", 1000);
}


window.onload = function () {
  startImageFlicker();
  setTimeout(removeSplash, 5000);
  document.getElementById('splash').addEventListener('click', removeSplash);
};

window.onload = function () {
startImageFlicker();
setTimeout(removeSplash, 5000);
document.getElementById('splash').addEventListener('click', removeSplash);
initializeSparkles();
};


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

function updateTiny(i) {
if (--tinyv[i] === 25) {
tiny[i].style.width = "1px";
tiny[i].style.height = "1px";
}
if (tinyv[i]) {
tinyy[i] += 1 + Math.random() * 3;
if (tinyy[i] < shigh) {
  tiny[i].style.top = tinyy[i] + "px";
  tinyx[i] += (i % 5 - 2) / 5;
  tiny[i].style.left = tinyx[i] + "px";
} else {
  tiny[i].style.visibility = "hidden";
  tinyv[i] = 0;
}
} else tiny[i].style.visibility = "hidden";
}

function createDiv(height, width) {
var div = document.createElement("div");
div.style.position = "absolute";
div.style.height = height + "px";
div.style.width = width + "px";
div.style.overflow = "hidden";
div.style.backgroundColor = colour;
return div;
}


const cursor = document.querySelector('.cursor');

if (cursor) {
  document.addEventListener('mousemove', (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursor.style.top = `${mouseY}px`;
    cursor.style.left = `${mouseX}px`;
  });
} else {
  console.error("Cursor element not found!");
}

window.addEventListener('mousemove', positionCursor);



  
  // Attach event listeners to the element that should trigger the popup
  var popupTrigger = document.getElementById("popupTrigger"); // Ensure this element exists in your HTML
  if (popupTrigger) {
    popupTrigger.addEventListener("mouseover", function() {
      showPopup("your-page.html"); // Replace with the actual page URL
    });
  
    popupTrigger.addEventListener("mouseout", closePopup);
  }
  

  const circles = document.querySelectorAll('.circle');
  circles.forEach(circle => {
    circle.style.backgroundColor = 'white'; // Ensure this is applied
  });
  