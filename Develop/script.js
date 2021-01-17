var tasks = {};

// display current date 

    $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));


// change color for textarea hours

function hourTracker() {
    //get current number of hours.
    var currentHour = moment().hour(); // use of moment.js

    // loop over time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( blockHour, currentHour)

        //check if we've moved past this time, click into css/html given classes of past, present, or future
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
hourTracker(); //re-run function


// save task into time block

// var saveTasks = function() {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

$('#save').on('click', function(event) {
    event.preventDefault();
    saveTasks();
    console.log(tasks);
});