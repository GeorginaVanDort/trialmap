(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function CodeSchool(code_school, address) {
  this.name = code_school;
  this.address = address;
}

var geocoder;
var map;

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

exports.getcodeSchoolModule = CodeSchool;

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
var CodeSchool = require('./../js/map.js').getcodeSchoolModule;
var Search = require('./../js/search.js').searchModule;

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

  $("#coffee").click(function() {
    var locationInput = $("#locationInput").val();
    var coffee = "coffee";
    var coffeeShop = new Search(locationInput, coffee);
    coffeeShop.coffeeSearch();
    console.log("hi1");
  });

});

$(document).ready(function(){
  $('#time').text(moment());
});

},{"./../js/map.js":1,"./../js/search.js":2}]},{},[3]);
