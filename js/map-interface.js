var CodeSchool = require('./../js/map.js').getcodeSchoolModule;
//
// var epicodus = "400 6th Ave, Portland, Oregon";
// var codeFellows = "500 6th Ave, Portland, Oregon"
// var pdxcodeguild = "600 6th Ave, Portland, Oregon";
$(document).ready(function(){
  $('#schoolFinder').click(function() {
    var code_school = $('#schoolNames').val();
    var address = "";
      if (code_school === "epicodus") {
        address = "400 6th Ave, Portland, Oregon";
      } else if (code_school === "codeFellows") {
        address = "500 6th Ave, Portland, Oregon";
      } else if (code_school === "pdxcodeguild") {
        address = "600 6th Ave, Portland, Oregon";
      } else {
        return "That school is not located in Portland.";
      }
      var codeSchool = new CodeSchool(code_school, address);

      codeSchool.codeAddress();
      // codeSchool.displaycodeSchool();

  });
});
