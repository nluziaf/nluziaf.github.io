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

window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
      header.classList.add('nav')
  } else {
      header.classList.remove('nav')
  }
}
