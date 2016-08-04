(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function SearchCity (city, thing) {
  this.city = city;
  this.thing = thing;
}

var geocoder;
var map;
var service;
var infowindow;
var setLocation;

SearchCity.prototype.getAddress = function() {

  geocoder = new google.maps.Geocoder();

  geocoder.geocode( { 'address': this.city }, function(results, status) {
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
    setLocation = results[0].geometry.location;
  });
};

    console.log("HI!!!");


// second prototype//

SearchCity.prototype.getThing = function () {
  var self = this;
  geocoder = new google.maps.Geocoder();


  map = new google.maps.Map(document.getElementById('map'), {
    center: setLocation,
    zoom: 14
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: setLocation,
    radius: 2000,
    type: [this.thing]
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

};

exports.citySearchModule = SearchCity;

},{}],2:[function(require,module,exports){
var SearchCity = require('./../js/map.js').citySearchModule;
// var Search = require('./../js/search.js').searchModule;

$(document).ready(function(){

  $("#citySearch").click(function() {
    var city = $("#city").val();
    var citySearch = new SearchCity(city, 1);
    citySearch.getAddress();
  });

  $("#interestSearch").click(function() {
    var city = $("#city").val();
    var thing = $("#interest").val();
    var thingSearch = new SearchCity(city, thing);
    thingSearch.getThing();
  });

});

$(document).ready(function(){
  $('#time').text(moment());
});

},{"./../js/map.js":1}]},{},[2]);
