// JavaScript Document
$(document).ready(function(e) {
    // Open Popup Js
    $(".popupbtn").click( function(){
      $(".popubody, .dullbg").fadeIn("400");	
    });
    // Close Popup Js
    $(".close").click( function(){
      $(".popubody, .dullbg").fadeOut("400");	
    });
});
