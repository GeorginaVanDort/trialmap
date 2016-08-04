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
