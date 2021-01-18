var tasks = JSON.parse(localStorage.getItem('tasks'))

// display current date 

 $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));


// change color for past, present, future hours 

function hourChange() {

    var currentHour = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this)
        .attr("id")
        .split("hour")[1]);

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
hourChange(); 


// save task into time block

$(".saveBtn").on("click", function () {

    console.log(this);
    var text = $(this)
    .siblings(".tasks")
    .val(); 
    var time = $(this)
    .parent()
    .attr("id"); 

    //set items in local storage.
    localStorage.setItem(time, text);
})

// load tasks

$("#hour9 .tasks").val(localStorage.getItem("hour9"));
$("#hour10 .tasks").val(localStorage.getItem("hour10"));
$("#hour11 .tasks").val(localStorage.getItem("hour11"));
$("#hour12 .tasks").val(localStorage.getItem("hour12"));
$("#hour13 .tasks").val(localStorage.getItem("hour13"));
$("#hour14 .tasks").val(localStorage.getItem("hour14"));
$("#hour15 .tasks").val(localStorage.getItem("hour15"));
$("#hour16 .tasks").val(localStorage.getItem("hour16"));
$("#hour17 .tasks").val(localStorage.getItem("hour17"));


