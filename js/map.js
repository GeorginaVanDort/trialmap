function CodeSchool(code_school, address) {
  this.name = code_school;
  this.address = address;
}

var geocoder;
var map;
var service;
var infowindow;


CodeSchool.prototype.codeAddress = function() {
  geocoder = new google.maps.Geocoder();

  geocoder.geocode( { 'address': this.address}, function(results, status) {
    if (status == 'OK') {

      var latlng = new google.maps.LatLng("");
      var mapOptions = {
        zoom: 16,
        center: latlng
      };
      map = new google.maps.Map(document.getElementById('map'), mapOptions);
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
};
CodeSchool.prototype.findThings = function () {

  var request = {
    location: this.address,
    radius: '500',
    types: ["coffee"]
  };

  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);


  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        createMarker(results[i]);
      }
    }
  }
};

exports.getcodeSchoolModule = CodeSchool;
