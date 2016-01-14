$(function(){
  $('#landing_screen').on("click", function(){
    console.log("clicking landing_screen");
    $( this ).remove();
  })
  initializeMap();
  //overlay = $( '#travTravelsOverlay' );
  //window.setInterval(rotateBackgroundImage, 1000);

});

function initializeMap(){
  console.log("initializing map");
  var mapProp = {
    center: {lat: 39.7392, lng: -104.9903},
    zoom:7,
    mapTypeId:google.maps.MapTypeId.HYBRID
  };
  map = new google.maps.Map(document.getElementById('map'), mapProp);
  console.log("map initialized.");
}

function rotateBackgroundImage(){
  overlay.css('background-image', 'url(images/travelPhotos/'+ getRandomImage() + ')');
}

function getRandomImage(){
  return "DSC0" + (Math.floor(Math.random()*4+1871)) + ".JPG";
}