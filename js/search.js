// This example adds a search box to a map, using the Google Place Autocomplete
  // feature. People can enter geographical searches. The search box will return a
  // pick list containing a mix of places and predicted search terms.

  // This example requires the Places library. Include the libraries=places
  // parameter when you first load the API. For example:
  // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
// function Search(locationInput, coffee) {
//   this.coffee = coffee;
//   this.locationInput = locationInput;
// }
//
// Search.prototype.coffeeSearch = function() {
//   var map;
//   var service;
//   var infowindow;
//
//   geocoder = new google.maps.Geocoder();
//   geocoder.geocode( { 'address': this.locationInput}, function(results, status) {
//     if (status == 'OK') {
//       var latlng = new google.maps.LatLng("");
//       var mapOptions = {
//         zoom: 16,
//         center: latlng
//       };
//       map = new google.maps.Map(document.getElementById('map'), mapOptions);
//       map.setCenter(results[0].geometry.location);
//
//   console.log("hiPP");
//
//       infowindow = new google.maps.InfoWindow();
//       var service = new google.maps.places.PlacesService(map);
//       service.nearbySearch({
//         location: this.locationInput,
//         radius: 500,
//         type: [coffee]
//       }, callback);
//
//       function callback(results, status) {
//         if (status == google.maps.places.PlacesServiceStatus.OK) {
//           for (var i = 0; i < results.length; i++) {
//             var place = results[i];
//             createMarker(results[i]);
//           }
//         }
//       }
//     }
//   )
// };
//   exports.searchModule = Search;
