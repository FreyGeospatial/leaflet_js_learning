/***** set variables *****/
var map = L.map('map', {
	center: [9.5, -1.51], //on load, center map here
	zoom: 12,
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
var image_mosaic = L.tileLayer.wms("http://localhost:8080/geoserver/learn_js/wms",{
	layers: 'learnjs:GS',
	format: 'image/png',
	zIndex: 2, //superimpose over basemap
	transparent: true, //eliminate null value background layer
	opacity: 1
});

//create geojson layer group
var geojson_layergroup = L.layerGroup();


//geojson files - set up another localhost to serve geojson files, and set cross origin header appropriately
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539806_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539807_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539808_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539809_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539810_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539826_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539827_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539828_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539829_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539830_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539846_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539847_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539848_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539849_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539850_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539866_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539867_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539868_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539869_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539870_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539886_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539887_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539888_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539889_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539890_736815_736967_seg.geojson", {style: defaultStyle, onEachFeature: onEachFeature}).addTo(map);


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
        click: zoomToFeature
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
image_mosaic.addTo(map);