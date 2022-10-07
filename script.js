var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").text(currentDate);

var timeBlock = $(".time-block");
var saveBtn = $('.saveBtn');
var descriptionInput = $('.description')

function inputUserSchedule() {
descriptionInput = $('<textarea>').value();
timeBlock.append('<p>' + descriptionInput + '<p>');
}

saveBtn.click(inputUserSchedule());