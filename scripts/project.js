const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;



const lastModified = new Date(document.lastModified);
const lastModifiedDate = lastModified.toLocaleString();
document.getElementById('lastModified').textContent = `LastModified: ${lastModifiedDate}`;

const places = [
    {
      id: "rs",
      name: "Rio Grande Do Sul",
      averagerating: 4.5
    },
    {
      id: "sc",
      name: "Santa Catarina",
      averagerating: 4.7
    },
    {
      id: "pr",
      name: "Parana",
      averagerating: 3.5
    },
    {
      id: "sp",
      name: "São Paulo",
      averagerating: 3.9
    },
    {
      id: "mn",
      name: "Manaus",
      averagerating: 5.0
    }
  ];
  
  const selectElement = document.getElementById('place');
  
  
  const placeholder = document.createElement('option')
  placeholder.value = "";
  placeholder.textContent = "Select a product..";
  placeholder.disabled = true;
  placeholder.selected = true;
  selectElement.appendChild(placeholder);
  
  places.forEach(place => {
      const option = document.createElement('option');
      option.value = place.id;
      option.textContent = place.name;
      selectElement.appendChild(option);
  });