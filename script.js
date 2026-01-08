
window.onload = function () {
  showSplashScreen();
  startImageFlicker();
}

function trackMouse(e) {
x = e.clientX + window.scrollX;
y = e.clientY + window.scrollY;
}



for (var i = 0; i < sparkles; i++) {
if (starv[i]) updateStar(i);
if (tinyv[i]) updateTiny(i);
}function createDiv(height, width) {
var div = document.createElement("div");
div.style.position = "absolute";
div.style.height = height + "px";
div.style.width = width + "px";
div.style.overflow = "hidden";
div.style.backgroundColor = colour;
return div;
}
  

  const circles = document.querySelectorAll('.circle'); function init() {
  window.WIDTH = 48;
  window.HEIGHT = 48;
  window.scene = new THREE.Scene();
  window.camera = new THREE.PerspectiveCamera(
    1,
    WIDTH / HEIGHT,
    0.1,
    1000
  );
  window.renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });
  
  renderer.setSize(WIDTH, HEIGHT);  var geometry = new THREE.SphereGeometry( 3, 64, 48 );
  var material = new THREE.MeshStandardMaterial( {
    color: 0xffffff,
    emissive: 0x000000,
    roughness: 1,
  metalness: 1,
  map: texture
} );
  window.globe = new THREE.Mesh( geometry, material );
  window.globe.rotation.z = Math.PI;
  window.globe.rotation.y = 1.5;
  scene.add( globe );

  var light = new THREE.PointLight( 0xffffff, 3.33, 0 );
  light.position.set( 150, -150, 1500 );
  scene.add( light );
  
  var light2 = new THREE.PointLight(0xffffff, 2, 0);
  light2.position.set(-125, 100, -500);
  scene.add(light2);

  camera.position.z = 345;
  document.body.appendChild(renderer.domElement);
  window.gl = window.renderer.context;
  window.pixels = new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);

  render();

}function render() {
  requestAnimationFrame(render);
  window.globe.rotation.y -= 0.01;
  window.renderer.render(window.scene, window.camera);
  window.gl.readPixels(0, 0, window.WIDTH, window.HEIGHT, gl.RGBA, gl.UNSIGNED_BYTE, pixels)
  var text = grayscale10(window.pixels).map(asciify).join("");
  text = text.split("\n").map(reverseString).join("\n");
  window.outputEl.innerHTML = text;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function grayscale10(pixels) {
  var length = pixels.length;
  var gsPixels = [];
  for (var i = 0; i < length; i += 4) {
    gsPixels.push(
      Math.floor(
        (pixels[i] +
        pixels[i+1] +
        pixels[i+2]) /
        768 * window.ASCII.length
      )
    );
  }
  return gsPixels;
}

  
</script>