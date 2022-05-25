var currentDay = document.getElementById('currentDay');
currentDay.textContent = moment().format("MMMM Do YYYY");

var currentTime = moment().hour();

//Assign saveBtn click listener for user input and time stamp??
$(".saveBtn").on("click", function () {
    //get nearby values.
    console.log(this);
    var event = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //set items in local storage.
    localStorage.setItem(time, event);
});

//display events from LocalStorage for each hour
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

//track time to change colors for past, present, future events
var timeTracker = function () {
    //loop through each time block
    $(".time-block").each(function(){
        var hour = parseInt($(this).attr("id"));
        console.log(hour, currentTime);

        //check for past, current, or future
        if (hour < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if (hour === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
};

timeTracker();
