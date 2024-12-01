const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Add click event to toggle menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
});

const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;



const lastModified = new Date(document.lastModified);
const lastModifiedDate = lastModified.toLocaleString();
document.getElementById('lastModified').textContent = `LastModified: ${lastModifiedDate}`;