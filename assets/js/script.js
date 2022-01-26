// const eventEntry = $("#entryEight");
// const eightAm = $("eight");
// const nineAm = $("nine");
// const saveBtn = $("saveBtn")
const timeBlock = $(".time_block")


//today's date and time displayed in the jumbotron header
const today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

const localTime = moment();
$("#localTime").text(today.format("LT"));

const workHours = [08, 09, 10, 11, 12, 01, 02, 03, 04, 05]
// console.log (workHours)

// const eightAm = $("#eight").text(workHours[0]);

$(".time_block").each(function(){
  if(timeBlock === moment().startOf('hour')
  .addClass('present')
  );
});







// const hourCheck = moment("h");
// if ("9" === hourCheck){
//   nineAm.addClass("present");
// }

// const currentHour = today.format("h");
// const fourP = $('#4p').text(today.format("4"));

// // const currentTime;
// if(currentHour = fourP ){
//   $('#4p').addClass('present');
// }

// function to compare h of current time and calender and assign classes accordingly


//accordion widget allows planned events to collapse
$( function() {
  $( "#accordion" ).accordion({
    collapsible: true
  });
} );




// const hoursInDay = {
//   hours:[
//     {display: "8:00am", hCheck: "8"},
//     {display: "9:00am", hCheck: "9"},
//     {display: "10:00am", hCheck: "10"},
//     {display: "11:00am", hCheck: "11"},
//     {display: "12:00pm", hCheck: "12"},
//     {display: "1:00pm", hCheck: "1"},
//     {display: "2:00pm", hCheck: "2"},
//     {display: "3:00pm", hCheck: "3"},
//     {display: "4:00pm", hCheck: "4"},
//     {display: "5:00pm", hCheck: "5"},
//   ]
// }