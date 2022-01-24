
// //declared variables
// var timeMenu = $('#menu')



//today's date and time displayed in the jumbotron header
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

$( function() {
  $( "#accordion" ).accordion({
    collapsible: true
  });
} );


