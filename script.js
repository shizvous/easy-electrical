const menu = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menu && navLinks) {
  menu.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
  });
}
