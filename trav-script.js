$(function(){
  $('#landing_screen').on("click", function(){
    console.log("clicking landing_screen");
    $( this ).remove();
  })
  initializeMap();


});

function initializeMap(){
  console.log("initializing map");
  var mapProp = {
    center: {lat: 39.7392, lng: -104.9903},
    zoom:2,
    mapTypeId:google.maps.MapTypeId.HYBRID
  };
  map = new google.maps.Map(document.getElementById('map'), mapProp);
  console.log("map initialized.");
  drawMarkers(map);
}

function rotateBackgroundImage(){
  overlay.css('background-image', 'url(images/travelPhotos/'+ getRandomImage() + ')');
}

function getRandomImage(){
  return "DSC0" + (Math.floor(Math.random()*4+1871)) + ".JPG";
}

var City = function City(city, latitude, longitude, country){
  this.city = city;
  this.latitude = latitude;
  this.longitude = longitude;
  this.country = country;
}

var destinations = [];
destinations.push( new City("Denver", 39.739236, -104.990251, "USA") );
destinations.push( new City("London", 51.508601, -0.129808, "UK") );
destinations.push( new City("Dubrovnik", 42.650661, 18.094424, "HR") );

function drawMarkers(map){

  for(var i in destinations){
    var newMarker = new google.maps.Marker({
      position: {
        lat: Number(destinations[i]['latitude']),
        lng: Number(destinations[i]['longitude'])
      }
    });

    newMarker.setMap(map);

    var newInfoWindow = new google.maps.InfoWindow({
      content: destinations[i]["city"]
    });

    createMarkerListener(map, newMarker, newInfoWindow);
    
  }
}

function createMarkerListener(map, marker, infoWindow){
   google.maps.event.addListener(marker, 'click', function(){
      infoWindow.open(map, marker);
  });
}

