var Map = require('./../js/map.js').tempMap;

// var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  // $('#temp').click(function() {
  //   var city = $('#location').val();
  //   // $('#location').val("");
  //   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
  //     var myTemp = new Temperature(response.main.temp);
  //     var unit = $('#unit').val();
  //     if (unit === "celsius") {
  //       temp = Math.floor(myTemp.celsius());
  //     }
  //     else {
  //       temp = Math.floor(myTemp.fahrenheit());
  //     }
  //     $('.showTemperature').text("The temperature in " + city + " is " + temp + " degrees " + unit);
  //   });
    // .fail(function(error) {
    //   $('.showWeather').text(error.responseJSON.message);
    // });
  // });
});
