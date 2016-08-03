function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(45.522285, -122.676305),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.SATELLITE
  };
  var Map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

google.maps.event.addDomListener(window, 'load', initialize);
