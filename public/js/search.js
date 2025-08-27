function handleSearch(e) {
    e.preventDefault();
    const searchQuery = document.getElementById("searchInput").value.toLowerCase().trim();
    const listingLinks = document.querySelectorAll(".listing-link");
    let matchFound = false;

    // Create or get the no-results message element
    let noResults = document.getElementById("no-results-message");
    if (!noResults) {
        noResults = document.createElement("div");
        noResults.id = "no-results-message";
        noResults.className = "text-center mt-4";
        noResults.innerHTML = `<h3>No listings found for "${searchQuery}"</h3>`;
        document.querySelector(".row").after(noResults);
    }

    listingLinks.forEach(link => {
        const titleElement = link.querySelector(".card-title");
        const locationElement = link.querySelector(".card-location");
        const countryElement = link.querySelector(".card-country");
        
        const title = titleElement ? titleElement.textContent.toLowerCase() : '';
        const location = locationElement ? locationElement.textContent.toLowerCase() : '';
        const country = countryElement ? countryElement.textContent.toLowerCase() : '';
        
        const matches = title.includes(searchQuery) || 
                       location.includes(searchQuery) || 
                       country.includes(searchQuery);
        
        if (matches) {
            link.style.display = "block";
            matchFound = true;
        } else {
            link.style.display = "none";
        }
    });

    // Show/hide no results message
    noResults.style.display = matchFound ? "none" : "block";

    console.log("Search query:", searchQuery);
    console.log("Number of listings found:", listingLinks.length);
}