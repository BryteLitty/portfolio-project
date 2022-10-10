const openBtn = document.querySelector('.nav-icon');
const closeBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.list-item');

openBtn.addEventListener('click', () => {
  mobileMenu.classList.add('show-mobile-menu');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('show-mobile-menu');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('show-mobile-menu');
  });
});