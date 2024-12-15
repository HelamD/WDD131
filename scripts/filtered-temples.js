const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;



const lastModified = new Date(document.lastModified);
const lastModifiedDate = lastModified.toLocaleString();
document.getElementById('lastModified').textContent = `LastModified: ${lastModifiedDate}`;


const templeContainer = document.getElementById("templeContainer");
const navButtons = document.querySelectorAll(".nav-menu button");

// Define the array of temples (same as before)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
    templeName: "Manaus Brazil Temple",
    location: "Manaus City, Brazil",
    dedicated: "2007, May, 23 ",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manaus-brazil/800x1280/manaus-brazil-temple-lds-988363-wallpaper.jpg"
    },

    {
    templeName: "Caracas Venezuela Temple",
    location: "Caracas City, Venezuela",
    dedicated: "2000, August, 20 ",
    area: 15332,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/caracas-venezuela/800x450/caracas_venezuela_temple_detail_1691066_2400x1200.jpg"
    },

    {
    templeName: "Arequipa Peru Temple",
    location: "Arequipa City, Peru",
    dedicated: "2019, December, 15 ",
    area: 26969,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/800x500/1-55f6c59ce8f9c093a9c689067f8674335de544e2.jpeg"
    }, 
  
];

// Function to render temples
function renderTemples(templesToRender) {
  // Clear the container
  templeContainer.innerHTML = "";

  // Loop through the templesToRender array and create cards
  templesToRender.forEach((temple) => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Image`;
    img.loading = "lazy";

    const templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area} sq ft`;

    card.appendChild(img);
    card.appendChild(templeName);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);

    templeContainer.appendChild(card);
  });
}

// Function to filter temples based on criteria
function filterTemples(criteria) {
  let filteredTemples;

  switch (criteria) {
    case "old":
      filteredTemples = temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() < 1900
      );
      break;
    case "new":
      filteredTemples = temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() > 2000
      );
      break;
    case "large":
      filteredTemples = temples.filter((temple) => temple.area > 90000);
      break;
    case "small":
      filteredTemples = temples.filter((temple) => temple.area < 10000);
      break;
    default:
      filteredTemples = temples; // Home displays all
  }

  renderTemples(filteredTemples);
}

// Add event listeners to navigation buttons
navButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const filterCriteria = event.target.dataset.filter;
    filterTemples(filterCriteria);
  });
});

// Initially render all temples (Home view)
renderTemples(temples);


