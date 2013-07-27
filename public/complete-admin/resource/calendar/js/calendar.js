$(document).ready(function() {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $('#calendar').fullCalendar({
        editable: false,
        events: [
            {
                title: '12 Week Workout Program',
                start: new Date(y, m, 2),
                end: new Date(y, m + 3, 2),
                url: 'http://google.com/'
            },
	    {
		title: 'Program 1: Chest&Triceps',
		start: new Date(y, m, 2)
	    },
	    {
		title: 'Program 1: Back&Biceps',
		start: new Date(y, m, 3)
	    }
        ]
    });

});
