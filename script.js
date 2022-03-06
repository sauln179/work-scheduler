saveButton = document.querySelector("#saveBtn");
var currentDay =document.querySelector("#currentDay")
var now = moment().format('dddd, MMMM D ')
//Adds the day of the week, and day of the month.
$(currentDay).append(now);

function currentEvent() {
    var timeBlock = document.querySelectorAll("div.time-block")
    var currentTime = moment().format('H');
    for (var i = 0 ; i < timeBlock.length ; i++) {

        
        var timeID = timeBlock[i].id;
        var targetClass = document.getElementById(timeBlock[i].id)

        //Checks each timeblock, and removes the three classes.
        $(timeBlock[i].id).removeClass(".present .past .future");

        // Depending on the time, applies one of the class.
        if (timeID < currentTime) {
            $(targetClass).addClass("past");
        } else if (timeID> currentTime) {
            $(targetClass).addClass("future");
        } else {
            $(targetClass).addClass("present");
        }
    }
    
}
$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Stores the value of each textarea.
        //Previously, I had tried to use queryselector to try to obtain this info,
        //Unfortunately, that caused the code to break, as it would only save the 9:00AM descriptions.
        var text = $(this).siblings(".textarea").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
  
})
function loadEvent(){
    //Loads all events that are stored in the local storage
    $("#time09 .textarea").val(localStorage.getItem("time09"));
    $("#time10 .textarea").val(localStorage.getItem("time10"));
    $("#time11 .textarea").val(localStorage.getItem("time11"));
    $("#time12 .textarea").val(localStorage.getItem("time12"));
    $("#time13 .textarea").val(localStorage.getItem("time13"));
    $("#time14 .textarea").val(localStorage.getItem("time14"));
    $("#time15 .textarea").val(localStorage.getItem("time15"));
    $("#time16 .textarea").val(localStorage.getItem("time16"));
    $("#time17 .textarea").val(localStorage.getItem("time17"));
   

}
// checkTime every 5 minutes
setInterval(currentEvent(), (1000 * 60)* 5);
loadEvent();


