import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
//modules for our geoJSON data
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';


var queryURL = './data/countries.json';
var map = new ol.Map({
  target: 'map-container',
  layers: [
    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: './data/usaStates.geojson',
        visible: false   //FLASE -- makes our state features hide in the background
      })
    }),
    new TileLayer({
      source: new OSM(),
      visible: true,    //TRUE -- makes our base map the primary layer
      title: "OSMStandard",
    })
  ],
  view: new View({
    center: [-11114346.090553224, 4959828.489182866],
    zoom: 5
  })
});

map.on('click', function(e){
  map.forEachFeatureAtPixel(e.pixel, function(feature, layer){
    console.log(feature);
    console.log(e.pixel);
    console.log(feature.values_.States);

    var pixelY = e.pixel[1]+"px";
    var pixelX = e.pixel[0]+"px";
    var miniTableEl = $("#stateMiniTable")
    //create a table element to append content into
    
    if(feature.values_.States === "US-CA" || feature.values_.States === "US-TX"){
      console.log("Holy smokes batman");
      miniTableEl.empty();
      var stateTable = $("<table class = table>").append($("<thead>").append($("<tr scope = row>")));
      var theadMetric = $("<td>").text("Metric");
      var theadTotal = $("<td>").text("Total");
      var theadPerCap = $("<td>").text("Per Capita");

      stateTable.append(theadMetric, theadTotal, theadPerCap);


      miniTableEl.append(stateTable).css({"position":"absolute", "top":pixelY, "left":pixelX, "background-color":"white"});;


    }

  })
})

// feature.values_.States will return our state value for each feature
//FIND WAY TO PUSH MAP INTO OUR WORKING PROJECT