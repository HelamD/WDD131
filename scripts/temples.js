const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Add click event to toggle menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
});