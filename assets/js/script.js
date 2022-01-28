


// const workHours = [
//   {
//     when: "8am",
//     militaryTime: 08
//   },
//   {
//     when: "9am",
//     militaryTime: 09
//   },
//   {
//     when: "10am",
//     militaryTime: 10
//   },
//   {
//     when: "11am",
//     militaryTime: 11
//   },
//   {
//     when: "12pm",
//     militaryTime: 12
//   },
//   {
//     when: "1pm",
//     militaryTime: 13
//   },
//   {
//     when: "2pm",
//     militaryTime: 14
//   },
//   {
//     when: "3pm",
//     militaryTime: 15
//   },
//   {
//     when: "4pm",
//     militaryTime: 16
//   },
//   {
//     when: "5pm",
//     militaryTime: 17
//   },
// ]




const today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

const localTime = moment();
$("#localTime").text(today.format("LT"));



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

// console.log (workHours)

// const eightAm = $("#eight").text(workHours[0]);

// $(".time_block").each(function(){
//   if(timeBlock === moment().startOf('hour')
//   .addClass('present')
//   );
// });

function creation(hourCheck) {
  console.log(thisHour);
  const thisHour = parseInt(hourCheck.attr('id').split("-")[0]);

  if (timeCheck === thisHour) {
    hourCheck.addClass("present");
  } else if (timeCheck > thisHour){
    hourCheck.addClass("past");
  } else if (timeCheck < thisHour){
    hourCheck.addClass("future");
  }
}


// const TimesArray = [textareaEl_8, textareaEl_9, textareaEL_10,];



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