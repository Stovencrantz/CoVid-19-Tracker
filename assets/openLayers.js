
window.onload = init;


function init(){
  var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: [-11019097.248012709, 4546148.095837107],
      zoom: 4,
      minZoom: 4,
      maxZoom: 6
    }),

    
  });

  // const statesGeoJSON = new ol.layer.VectorImage({
  //   source: new ol.source.Vector({
  //     url: "assets/data/usaStates.geojson",
  //     format: new ol.format.GeoJSON()
  //   }),
  //   visible: true,
  //   title: "ColoradoVeiwGeoJSON"
  // })
  // map.addLayer(statesGeoJSON);

  map.on("click", function(e){
    console.log(e.coordinate);
    
  })
}