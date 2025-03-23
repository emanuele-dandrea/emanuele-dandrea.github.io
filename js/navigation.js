const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

menu.addEventListener('click', () => {
  if (menuOpen == false) {
    navLinks.style.display = "block";
    menuOpen = true;
  }
  else if (menuOpen == true) {
    navLinks.style.display = "none";
    menuOpen = false;
  }
})