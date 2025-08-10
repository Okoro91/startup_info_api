document.addEventListener("DOMContentLoaded", () => {
  const fetchButton = document.getElementById("fetchButton");
  const searchInput = document.getElementById("searchInput");
  const resultsDiv = document.getElementById("results");

  const API_BASE_URL = "/api/startups";

  const fetchData = async (query = "") => {
    try {
      resultsDiv.innerHTML =
        '<p class="text-gray-500 text-center">Loading...</p>';

      const response = await fetch(`${API_BASE_URL}?search=${query}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const startups = await response.json();

      if (startups.length === 0) {
        resultsDiv.innerHTML =
          '<p class="text-gray-500 text-center">No startups found.</p>';
        return;
      }

      resultsDiv.innerHTML = "";
      startups.forEach((startup) => {
        const startupCard = document.createElement("div");
        startupCard.className =
          "bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200";
        startupCard.innerHTML = `
          <h4 class="text-lg font-semibold">${startup.name}</h4>
          <p class="text-gray-600 text-sm">Industry: ${startup.industry}</p>
          <p class="text-gray-600 text-sm">Country: ${startup.country}</p>
          <p class="mt-2 text-gray-700">${startup.description}</p>
        `;
        resultsDiv.appendChild(startupCard);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      resultsDiv.innerHTML = `<p class="text-red-500 text-center">Failed to fetch data: ${error.message}</p>`;
    }
  };

  fetchButton.addEventListener("click", () => {
    const query = searchInput.value;
    fetchData(query);
  });
  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      const query = searchInput.value;
      fetchData(query);
    }
  });
  fetchData();
});
