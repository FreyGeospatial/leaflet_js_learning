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
//var tileIndex = geojsonvt("aoi5_boundarymerge_reid.geojson");
//var tile = tileIndex.getTile(z, x, y).features;
//console.log(tileIndex.tileCoords);
/* ----------------------------add geojson highlighting, popups, etc--------------------------------------- */

var selected = [];

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
  // console.log("feature: ", feature);
  // console.log("layer: ", layer);
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: myfunction
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
  if (selected.includes(e.target.feature.properties["id"])) {
  }else{
        e.target.setStyle(defaultStyle());
  }
}


function myfunction(e){
  console.log(e.target.feature.properties["id"]);
  if (selected.includes(e.target.feature.properties["id"])) {
    selected.pop(e.target.feature.properties["id"]);
  }else{
    selected.push(e.target.feature.properties["id"]); //add feature id to list
  }
}

/**** add vars to map ****/
esri.addTo(map);
image_mosaic_OS.addTo(map);
image_mosaic_GS.addTo(map);
geojsonFeature.addTo(map);