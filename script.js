var i = 0;
var txt = "Hello! I am Luz.";
var speed = 50;

function typewriter() {
  if (i < txt.length) {
    document.getElementById('title').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}
