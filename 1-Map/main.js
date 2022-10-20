// For React/Next Apps, use ArcGIS API with npm install
require([
    'esri/Map',
    'esri/views/MapView'
], function(Map, MapView) {

    // Generate a new map from ArcGIS API. Nore that some basemaps will require a ArcGIS Developer subscription
    const map = new Map({
        basemap: 'dark-gray-vector'
    });

    // Setup the extent of the map
    const view = new MapView({
        container: 'viewDiv',
        map: map,
        extent: {
            xmin: -118.98364392089809,
            ymin: 33.64236255586565,
            xmax: -117.5073560791019,
            ymax: 34.4638389963474,
            spatialReference: 4326
        }
    })
});