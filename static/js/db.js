// Global array to hold all fetched data
let allData = [];

// Function to fetch data from the Flask API
async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint);

    // If response is okay, parse and store the data
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    allData = await response.json();

    // Initially display the first 5 items
    displayData(0, 5); // Show the first 5 items
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Function to display data on the webpage
function displayData(startIndex, endIndex) {
  const container = document.getElementById("data-container");

  // Clear the container before adding new items
  container.innerHTML = "";

  // Slice the data array based on start and end index and display each item
  const itemsToDisplay = allData.slice(startIndex, endIndex);
  itemsToDisplay.forEach(itemData => {
    const dataElement = document.createElement("div");
    // const itemData = JSON.parse(item[1])

    // Create HTML structure for each item
    dataElement.innerHTML = `
      <h3>${itemData.name}</h3>
      <p><strong>Symbol:</strong> ${itemData.symbol}</p>
      <p><strong>Description:</strong> ${itemData.description}</p>
      <img src="${itemData.image}" alt="${itemData.name}" style="max-width: 100px;"/>
      <hr/>
    `;

    container.appendChild(dataElement);
  });

  // If there are more items, show the 'Load More' button
  if (endIndex < allData.length) {
    showLoadMoreButton(endIndex);
  }
}

// Function to create the 'Load More' button
function showLoadMoreButton(startIndex) {
  const container = document.getElementById("data-container");

  // Create the 'Load More' button
  const loadMoreButton = document.createElement("button");
  loadMoreButton.textContent = "Load More";

  // When clicked, it will load the next 5 items
  loadMoreButton.addEventListener("click", () => {
    const nextIndex = startIndex;
    displayData(nextIndex, nextIndex + 5);
  });

  // Append the 'Load More' button to the container
  container.appendChild(loadMoreButton);
}

// Example of calling the fetchData function when the page loads
document.addEventListener("DOMContentLoaded", () => {
  // Call the API for 'Crypto' data when the page loads
  fetchData("http://localhost:5000/api/crypto");
});


