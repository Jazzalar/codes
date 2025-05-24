// Initialize the map
const map = L.map('map').setView([20, 0], 2);

// Add base tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to determine marker color based on magnitude
function getColor(magnitude) {
    return magnitude > 8.0 ? '#f03b20' :
           magnitude > 6.0 ? '#feb24c' :
                             '#ffeda0';
}

// Function to style each feature
function style(feature) {
    return {
        radius: 6,
        fillColor: getColor(feature.properties.magnitude),
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
}

// Function to create popup content
function onEachFeature(feature, layer) {
    const props = feature.properties;
    const popupContent = `
        <h3>${props.name}</h3>
        <p><strong>Date:</strong> ${props.date}</p>
        <p><strong>Magnitude:</strong> ${props.magnitude}</p>
        <p><strong>Affected Countries:</strong> ${props.countries.join(', ')}</p>
        <p><strong>Fatalities:</strong> ${props.fatalities.toLocaleString()}</p>
        <p><strong>Max Wave Height:</strong> ${props.maxWaveHeight} meters</p>
        <p><strong>Impact Area:</strong> ${props.impactArea}</p>
    `;
    layer.bindPopup(popupContent);
}

// Add tsunami data to the map
L.geoJSON(tsunamiData, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, style(feature));
    },
    onEachFeature: onEachFeature
}).addTo(map);