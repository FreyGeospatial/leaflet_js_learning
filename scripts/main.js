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

//geojson files - set up another localhost to serve geojson files, and set cross origin header appropriately
var geojsonFeature = new L.GeoJSON.AJAX("http://127.0.0.1:8003/tile539806_736815_736967_seg.geojson").addTo(map);

/*
var tile539806_736815_736967_seg = new L.GeoJSON.AJAX("scripts/geojson/Segments/tile539806_736815_736967_seg.geojson",{
	style: {
		fillColor: "#cc0000",
		weight: 1,
		color: "red",
		dashArray: "1",
		fillOpacity: 0
	}
}).addTo(geojson_layergroup);
*/

/**** add vars to map ****/
esri.addTo(map);
image_mosaic.addTo(map);