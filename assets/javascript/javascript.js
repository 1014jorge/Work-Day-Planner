// dayjs for day, date and time format
var today = dayjs().format('dddd') + " " + dayjs().format('DD MMM YYYY');
var currentHour = dayjs().format('h:mm:ss a');
// var for times of the day and key for local storage
var nineAm = $("#hour-9 textarea");
var tenAm = $("#hour-10 textarea");
var elevenAm = $("#hour-11 textarea");
var twelvePm = $("#hour-12 textarea");
var onePm = $("#hour-13 textarea");
var twoPm = $("#hour-14 textarea");
var threePm = $("#hour-15 textarea");
var fourPm = $("#hour-16 textarea");
var fivePm = $("#hour-17 textarea");


var hour = parseInt(dayjs().hour());
var userInput;
var hourSpan;
var hourString = $(".hour").text().split(" ");

// Date and Hour

var interval = setInterval(function () {
    var dayjsNow = dayjs();
    $('#currentDay').html(dayjsNow.format('YYYY MMMM DD') + ' '
        + dayjsNow.format('dddd')
            .substring(0, 3).toUpperCase());
    $('#currentDay').html(today + " " + dayjsNow.format('hh:mm:ss A'));
}, 100);

//function to save to local storage and persist after refresh
function saveTo() {

    console.log("Current Hour " + hour);
    var time9 = JSON.parse(localStorage.getItem("hour-9"));
    nineAm.val(time9);

    var time10 = JSON.parse(localStorage.getItem("hour-10"))
    tenAm.val(time10);

    var time11 = JSON.parse(localStorage.getItem("hour-11"))
    elevenAm.val(time11);

    var time12 = JSON.parse(localStorage.getItem("hour-12"))
    twelvePm.val(time12);

    var time1 = JSON.parse(localStorage.getItem("hour-13"))
    onePm.val(time1);

    var time2 = JSON.parse(localStorage.getItem("hour-14"))
    twoPm.val(time2);

    var time3 = JSON.parse(localStorage.getItem("hour-15"))
    threePm.val(time3);

    var time4 = JSON.parse(localStorage.getItem("hour-16"))
    fourPm.val(time4);

    var time5 = JSON.parse(localStorage.getItem("hour-17"))
    fivePm.val(time5);

}

function background() {

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var hourBlock = parseInt(id.split("-")[1]);

        if (hour > hourBlock) {
            $(this).addClass("past");
        } else if (hour < hourBlock) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }

    });
}

$(document).ready(function () {
    saveTo()
    background()

    // Button for to save to Local Storage
    $(".saveBtn").on("click", function () {
        var userInput = $(this).siblings(".description").val();
        console.log(userInput);
        var hourSpan = $(this).parent().attr("id");
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userInput));

    })

});