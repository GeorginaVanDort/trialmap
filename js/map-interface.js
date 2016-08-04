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

  $("#coffee").click(function() {
    var locationInput = $("#locationInput").val();
    var coffee = "coffee";
    var coffeeShop = new CodeSchool(1, locationInput);
    coffeeShop.findThings();
    console.log("hi1");
  });

});
