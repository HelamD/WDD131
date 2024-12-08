const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Set the last modified date in the footer
const lastModified = new Date(document.lastModified);
const lastModifiedDate = lastModified.toLocaleString();
document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;