// Sample tsunami data in GeoJSON format
const tsunamiData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "2004 Indian Ocean Tsunami",
                "date": "2004-12-26",
                "magnitude": 9.1,
                "countries": ["Indonesia", "Thailand", "Sri Lanka", "India", "Maldives", "Somalia"],
                "fatalities": 227898,
                "maxWaveHeight": 50, // meters
                "impactArea": "Coastal regions across the Indian Ocean"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [95.982, 3.316]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "2011 Tōhoku Tsunami",
                "date": "2011-03-11",
                "magnitude": 9.0,
                "countries": ["Japan"],
                "fatalities": 18500,
                "maxWaveHeight": 40.5,
                "impactArea": "Eastern coast of Honshu, Japan"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [142.369, 38.322]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "1960 Valdivia Tsunami",
                "date": "1960-05-22",
                "magnitude": 9.5,
                "countries": ["Chile", "Hawaii", "Japan", "Philippines"],
                "fatalities": 6000,
                "maxWaveHeight": 25,
                "impactArea": "Pacific Rim countries"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.05, -39.5]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "1908 Messina Tsunami",
                "date": "1908-12-28",
                "magnitude": 7.1,
                "countries": ["Italy"],
                "fatalities": 80000,
                "maxWaveHeight": 12,
                "impactArea": "Strait of Messina"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [15.693, 38.148]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "1883 Krakatoa Tsunami",
                "date": "1883-08-27",
                "magnitude": 6.0,
                "countries": ["Indonesia"],
                "fatalities": 36000,
                "maxWaveHeight": 42,
                "impactArea": "Sunda Strait"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [105.423, -6.102]
            }
        }
    ]
};