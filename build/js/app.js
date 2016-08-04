(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

// prototype 2 - searches for mulitple "coffee" links 500m around this.address//
CodeSchool.prototype.findThings = function() {
  function initMap() {
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
      type: ['store']
    }, callback);
  }

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

exports.getcodeSchoolModule = CodeSchool;

},{}],2:[function(require,module,exports){
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

$(document).ready(function(){
  $('#time').text(moment());
});

},{"./../js/map.js":1}]},{},[2]);
