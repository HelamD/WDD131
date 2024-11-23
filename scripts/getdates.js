const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;



const lastModified = new Date(document.lastModified);
const lastModifiedDate = lastModified.toLocaleString();
document.getElementById('lastModified').textContent = `LastModified: ${lastModifiedDate}`;
