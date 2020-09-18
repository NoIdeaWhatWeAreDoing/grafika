"use strict";

$(function () {
  //main container size
  var size = function size() {
    var innerWidth = window.innerWidth;

    if ($("#menu-switch").prop("checked")) {
      $("#wrap").css("width", innerWidth - 300);
    } else {
      $("#wrap").css("width", innerWidth);
    }
  };

  $(window).resize(size);
  $("#menu-toggle").click(function () {
    setTimeout(function () {
      size();
    }, 0);
  });
});