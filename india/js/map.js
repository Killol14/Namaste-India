function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: 46.619261, lng: -33.134766 },
    });
   
    // Create an array of alphabetical characters used to label the markers.
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   
  var locations = [
    { lat: -31.56391, lng: 147.154312 },
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
    { lat: -33.848588, lng: 151.209834 },
    
  ];
  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
        postition: location,
        label: labels[i % labels.length]
    });
  });
  const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });
}