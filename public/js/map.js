// Custom marker icons
const defaultIcon = L.divIcon({
    html: '<div class="marker-circle"><i class="fa-solid fa-house"></i></div>',
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [0, -35],
    className: 'myDivIcon'
});

const clickedIcon = L.divIcon({
    html: '<div class="marker-circle"><i class="fa-brands fa-airbnb"></i></div>',
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [0, -35],
    className: 'myDivIcon'
});

// Initialize the map with coordinates
const map = L.map('map').setView([coordinates.lat, coordinates.lng], 13);

// Add the OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add marker with default icon and click handling
const marker = L.marker([coordinates.lat, coordinates.lng], { icon: defaultIcon })
    .addTo(map)
    .bindPopup(`
        <h6>${coordinates.title}</h6>
        <p>${coordinates.location}</p>
    `)
    .openPopup();

// Change icon on click
marker.on('click', function() {
    marker.setIcon(clickedIcon);
});

// Handle map load errors
map.on('error', function(e) {
    console.error('Map error:', e);
});
