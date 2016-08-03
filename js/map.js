function CodeSchool(name, address) {
  this.name = name;
  this.address = address;
}

var geocoder;
var map;

CodeSchool.prototype.codeAddress = function() {
  geocoder = new google.maps.Geocoder();

  geocoder.geocode( { 'address': this.address}, function(results, status) {
    if (status == 'OK') {

      var latlng = new google.maps.LatLng(-34.397, 150.644);
      var mapOptions = {
        zoom: 8,
        center: latlng
      }

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
}

//
// CodeSchool.prototype.getAddress = function(address) {
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
//     $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
//   }).fail(function(error) {
//     $('.showWeather').text(error.responseJSON.message);
//   });
// }
//
//
// CodeSchool.prototype.displaycodeSchool = function() {
//   var mapProp = {
//     center:new google.maps.LatLng(45.522285, -122.676305),
//     zoom:5,
//     mapTypeId:google.maps.MapTypeId.SATELLITE
//   };
//   var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }
//
// google.maps.event.addDomListener(window, 'load', initialize);

exports.getcodeSchoolModule = CodeSchool;
