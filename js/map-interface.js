var CodeSchool = require('./../js/map.js').getcodeSchoolModule;
// var Search = require('./../js/search.js').searchModule;

$(document).ready(function(){
  $('#schoolFinder').click(function() {
    var code_school = $('#schoolNames').val();
    var address = "";
      if (code_school === "epicodus") {
        address = "400 6th Ave, Portland, Oregon";
      } else if (code_school === "codefellows") {
        address = "920 SW 3rd Ave, Portland, OR 97204";
      } else if (code_school === "pdxcodeguild") {
        address = "2626 SW Corbett Ave, Portland, OR 97201";
      } else {
        return "That school is not located in Portland.";
      }
      var codeSchool = new CodeSchool(code_school, address);

      codeSchool.codeAddress();
  });

  $("#locationFinder").click(function() {
    var location = $("#locationInput").val();
    var codeSchool = new CodeSchool(1, location);
    codeSchool.codeAddress();
  });

  $("#init").click(function() {
    // var locationInput = $("#locationInput").val();
    // var coffee = "coffee";
    // var coffeeShop = new CodeSchool(1, locationInput);
    // coffeeShop.findThings();
    // console.log("hi1");
    var pyrmont = {lat: -33.867, lng: 151.195};

    map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: pyrmont,
      radius: 500,
      type: ['cafe']
    }, callback);

  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
    }
  });

});
