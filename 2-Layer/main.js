// For React/Next Apps, use ArcGIS API with npm install
require([
    'esri/Map',
    'esri/views/MapView',
    'esri/layers/FeatureLayer'
], function(Map, MapView, FeatureLayer) {

    // Temporary data, data types accepted by API can be found in documentation
    const url = 'https://services9.arcgis.com/q5uyFfTZo3LFL04P/arcgis/rest/services/survey123_0954ef4c3eb74d9989a91330c7740a9f/FeatureServer/0';

    // Initialize the feature layer
    const featureLayer = new FeatureLayer({
        title: 'Buisnesses',
        url: url
    });

    // Generate a new map from ArcGIS API. Nore that some basemaps will require a ArcGIS Developer subscription
    const map = new Map({
        basemap: 'dark-gray-vector',
        layers: [featureLayer]
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
    });
});