function initMap() {
  
  var map = new google.maps.Map(document.getElementById("map"), {
    Zoom: 5,
    center:{lat: 28.704060, lng: 77.102493}
  });
   addMarker ({lat: 28.704060, lng: 77.102493});
   addMarker ({lat: 26.920980, lng: 75.794220});
   addMarker ({lat: 19.075983, lng: 72.877655});
   addMarker ({lat: 15.275810, lng: 74.005669});
   addMarker ({lat: 22.565570, lng: 88.370210});
   addMarker ({lat: 12.999205, lng: 77.599181});
   addMarker ({lat: 11.566144, lng: 92.614812});
   addMarker ({lat: 26.273714, lng: 92.368368});
   addMarker ({lat: 33.358062, lng: 76.557647});

function addMarker(coords){
  var marker = new google.maps.Marker({
    position: coords,
    map: map,
  });
}
} 

  

  
