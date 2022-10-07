var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").text(currentDate);

var currentTime = moment().format("HH");
var timeBlock = $(".time-block");
var saveBtn = $('.saveBtn');
var descriptionInput = $('.description')
var hourBlocks = [
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18"
]

var eventValues = []

function inputUserSchedule() {
    var pullEvents = [];
    for (var i = 0; i < hourBlocks.length; i++) {
        pullEvents.push(descriptionInput[i].value)
    }
    eventValues = pullEvents;
    localStorage.setItem('event', JSON.stringify(eventValues));
    alert("Saved!");

}

function showEvents() {
    if (JSON.parse(localStorage.getItem('event'))) {
        eventValues =  (JSON.parse(localStorage.getItem('event')));
    }
    for (var i = 0; i < hourBlocks.length; i++) {
        if (eventValues[i]) {
            descriptionInput[i].textcontent=eventValues[i];
        }
    }
}

function colorBlocks() {
    for (var i = 0; i < hourBlocks.length; i++) {
        if (currentTime < hourBlocks[i]) {
            // descriptionInput[i].addClass("future");
            $(descriptionInput[i]).addClass("future");
        } else if (currentTime>hourBlocks[i]) {
            $(descriptionInput[i]).addClass("past");
        } else {
            $(descriptionInput[i]).addClass("present");
        }
    }
}

saveBtn.click(inputUserSchedule);
showEvents();
colorBlocks();

