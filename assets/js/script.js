
//displays current date and time through moment.js
const today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

const localTime = moment();
$("#localTime").text(today.format("LT"));


//assigns background color depending on if the time is in the past present or future
const timeCheck = moment().format('HH');

$(".hour_Check").each(function(){
  const hourCheck = $(this).attr("id");

  if (timeCheck == hourCheck) {
    $(this).addClass("present");
  } else if (timeCheck < hourCheck){
    $(this).removeClass("present");
    $(this).addClass("future");
  } else if (timeCheck > hourCheck){
    $(this).removeClass("future");
    $(this).addClass("past");
  }
});

$(".saveBtn").click(function (event){
  event.preventDefault();
  const textSave = $(this).siblings(".description").val();
  console.log(textSave);
  const timeStamp = $(this).parent().attr("id");
  console.log(timeStamp);
  localStorage.setItem(timeStamp, textSave);
});

$("#08 .description").val(localStorage.getItem("08"));
$("#09 .description").val(localStorage.getItem("09"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));



