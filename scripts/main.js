/***** set variables *****/
var map = L.map('map', {
	center: [9.0, -1.2], //on load, center map here
	zoom: 10,
	//layers: [] //layer groups here
});

//esri basemap
var esri = L.esri.basemapLayer('Imagery',
	{opacity: 0.5});

/*
//For legend control
var overlays = {
	"layer1": layergroup1,
	"layer2": layergroup2
};
*/

//geotiff mosaic served as wms from geoserver
var image_mosaic_GS = L.tileLayer.wms("http://localhost:8080/geoserver/learn_js/wms",{
	layers: 'learnjs:GS',
	format: 'image/png',
	zIndex: 2, //superimpose over basemap
	transparent: true, //eliminate null value background layer
	opacity: 1
});
var image_mosaic_OS = L.tileLayer.wms("http://localhost:8080/geoserver/learn_js/wms",{
	layers: 'learnjs:OS',
	format: 'image/png',
	zIndex: 2, //superimpose over basemap
	transparent: true, //eliminate null value background layer
	opacity: 1
});


//create geojson layer group
var geojson_layergroup = L.layerGroup();

//load in geojson features
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/aoi5_boundarymerge_reid.geojson", {style: defaultStyle, onEachFeature: onEachFeature})


/* ----------------------------add geojson highlighting, popups, etc--------------------------------------- */
function defaultStyle() {
    return {
        fillColor: "#cc0000",
        weight: 1,
        opacity: 1,
        color: 'blue',
        dashArray: '1',
        fillOpacity: 00
    };
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: highlightFeature
    });
}

function highlightFeature(e) {
      var layer = e.target;

      layer.setStyle({
          weight: 5,
          color: '#666',
          dashArray: '',
          fillOpacity: 0.7
      });
  };


function resetHighlight(e) {
	e.target.setStyle(defaultStyle())
}
var highlight = {
    'color': '#333333',
    'weight': 2,
    'opacity': 1
};
 
function zoomToFeature(e) {

    map.fitBounds(e.target.getBounds());
}
/**** add vars to map ****/
esri.addTo(map);
image_mosaic_OS.addTo(map);
image_mosaic_GS.addTo(map);
geojsonFeature.addTo(map);