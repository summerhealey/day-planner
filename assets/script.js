//Application Code
$(document).ready(function () {
  //DISPLAY DATE
  const $currentDay = $("#currentDay");
  const $currentTime = $("#currentTime");
  const $container = $(".container");
  let now = moment().format("dddd, MMMM Do");
  $currentDay.text(now);

  //SAVE BUTTON
  $(".saveBtn").on("click", function () {
    var activity = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, activity);
    console.log(localStorage);
  });

  $("#hour-8 .description").val(localStorage.getItem("hour-1"));
  $("#hour-9 .description").val(localStorage.getItem("hour-2"));
  $("#hour-10 .description").val(localStorage.getItem("hour-3"));
  $("#hour-11 .description").val(localStorage.getItem("hour-4"));
  $("#hour-12 .description").val(localStorage.getItem("hour-5"));
  $("#hour-13 .description").val(localStorage.getItem("hour-6"));
  $("#hour-14 .description").val(localStorage.getItem("hour-7"));
  $("#hour-15 .description").val(localStorage.getItem("hour-8"));
  $("#hour-16 .description").val(localStorage.getItem("hour-9"));
  $("#hour-17 .description").val(localStorage.getItem("hour-10"));

  //TIMEBLOCKS
  /*Description: Hour, text area, and save button are presented by the hour 
for all business hours between 9AM and 5PM.*/

  // PAST, PRESENT, FUTURE
  function compareHour() {
    var currentHour = moment().hour();

    $(".row").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(blockHour);
        console.log(currentHour);
        if (currentHour > blockHour) {
            $(this).children(".description").addClass("past");
        }else if(currentHour === blockHour){
            $(this).children.removeClass("past");
            $(this).children.addClass("present");
        }else{
            $(this).children.removeClass("past present");
            $(this).children.addClass("future");

        }
    });
  }
compareHour();
  //CLEAR BUTTON
});
