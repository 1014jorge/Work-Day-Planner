// dayjs for day, date and time format
var today = dayjs().format('dddd') + " " + dayjs().format('DD MMM YYYY');
var currentHour = dayjs().format('h:mm:ss a');
// var for times of the day
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");


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

function saveTo() {

    console.log("Current Hour " + hour);
    var time9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineAm.val(time9);

    var time10 = JSON.parse(localStorage.getItem("10:00 am"))
    tenAm.val(time10);

    var time11 = JSON.parse(localStorage.getItem("11:00 am"))
    elevenAm.val(time11);

    var time12 = JSON.parse(localStorage.getItem("12:00 pm"))
    twelvePm.val(time12);

    var time1 = JSON.parse(localStorage.getItem("01:00 pm"))
    onePm.val(time1);

    var time2 = JSON.parse(localStorage.getItem("02:00 pm"))
    twoPm.val(time2);

    var time3 = JSON.parse(localStorage.getItem("03:00 pm"))
    threePm.val(time3);

    var time4 = JSON.parse(localStorage.getItem("04:00 pm"))
    fourPm.val(time4);

    var time5 = JSON.parse(localStorage.getItem("05:00 pm"))
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
    //   saveTo()
    background()

    // Button for to save to Local Storage
    $(".saveBtn").on("click", function () {
        var userInput = $(this).siblings(".description").val();
        console.log(userInput);
        var hourSpan = $(this).siblings(".col-2 col-md-1 hour text-center py-3").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userInput));

    })

});