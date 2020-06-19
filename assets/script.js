//Application Code
$(document).ready(function () {
  //DISPLAY DATE
  const $currentDay = $("#currentDay");
  const $container = $(".container");
  let nowDay = moment().format("dddd, MMMM Do");
  $currentDay.text(nowDay);

  //SAVE BUTTON
  $(".saveBtn").on("click", function () {
    var activity = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, activity);
    console.log(localStorage);
  });

  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

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
