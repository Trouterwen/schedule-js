 
$(document).ready(function() {
  // Gets the current date and formats it
  var currentDate = dayjs().format('MMMM DD, YYYY');
  $('#currentDay').text(currentDate);

  // Save button 
  $('.saveBtn').on('click', function() {
    // Getd the associated hour and user input
    var hour = $(this).parent().attr('id');
    var text = $(this).siblings('.description').val();
    console.log(hour,"modified");
    console.log("saved text: ",text);
    // Saves the event to local storage
    localStorage.setItem(hour, text);
  });

  

  // Loads the events from local storage and displays them
  for (var i = 9; i <= 17; i++) {
    var hour = 'hour-' + i;
    var savedEvent = localStorage.getItem(hour);

    // Checks if there is a saved event for the hour
    if (savedEvent) {
      $('#' + hour + ' .description').val(savedEvent);
    }
  }

  // Updates the past, present, future classes based on the current hour
  function updateHourClasses() {
    var currentHour = dayjs().format('H');
    console.log(currentHour)
    $('.time-block').each(function() {
      var hour = parseInt($(this).attr('id').split('-')[1]);

      if (hour < currentHour) {
        $(this).removeClass('present future').addClass('past');
      } else if (hour > currentHour) {
        $(this).removeClass('past present').addClass('future');
      } else {
        $(this).removeClass('past future').addClass('present');
      }
    });
  }

  // Updates hour classes every minute
  setInterval(updateHourClasses, 60000);

  //initial update of hour classes
  updateHourClasses();
});
