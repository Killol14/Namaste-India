// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -33, lng: 151 },
  });
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
const locations = [
  { lat: -31.56391, lng: 147.154312 },
  { lat: -33.718234, lng: 150.363181 },
  { lat: -33.727111, lng: 150.371124 },
  { lat: -33.848588, lng: 151.209834 },
  { lat: -33.851702, lng: 151.216968 },
];

const markers = locations.map(function(location, i){
  return new google.maps.Marker({
    position: location,
    label: labels[i % labels.length]
  });
});

var markerCluster = new markerCluster(map, markers,
  {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
  });
}
  
