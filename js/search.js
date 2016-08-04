// This example adds a search box to a map, using the Google Place Autocomplete
  // feature. People can enter geographical searches. The search box will return a
  // pick list containing a mix of places and predicted search terms.

  // This example requires the Places library. Include the libraries=places
  // parameter when you first load the API. For example:
  // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function Search(locationInput, coffee) {
  this.coffee = coffee;
  this.locationInput = locationInput;
}
  Search.prototype.coffeeSearch = function () {
    console.log("hi2");
    var map;
    var service;
    var infowindow;

    function initialize() {
    var locationInput = new google.maps.LatLng();
    map = new google.maps.Map(document.getElementById('map'), {
        center: this.locationInput,
        zoom: 15
      });

    var request = {
      location: this.locationInput,
      radius: '500',
      types: [this.coffee]
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        createMarker(results[i]);
      }
    }
  }
};
  exports.searchModule = Search;
