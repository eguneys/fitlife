$(function () {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart'
            },
            title: {
                text: 'Monthly Activity'
            },
	    subtitle: {

	    },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
            },
	    yAxis: {
		title: {
		    text: 'Total Minutes'
		}
	    },
            tooltip: {
                formatter: function() {
                    var s;
                    if (this.point.name) { // the pie chart
                        s = ''+
                            this.point.name +': '+ this.y +' Orang';
                    } else {
                        s = ''+
                            this.x  +': '+ this.y;
                    }
                    return s;
                }
            },

            labels: {
                items: [{
                    html: '',
                    style: {
                        left: '40px',
                        top: '8px',
                        color: 'black'
                    }
                }]
            },
            series: [{
                type: 'column',
                name: 'Chest/Triceps',
                data: [280, 3.3, 122, 333, 224,100,40,340,50,100,300,230]
            }, {
                type: 'column',
                name: 'Back/Biceps',
                data: [200, 113, 335, 227, 336,453,234,543,123,222,432,122]
            }, {
                type: 'column',
                name: 'Cardio/Stretching',
                data: [300, 323, 311, 192, 110,321,131,232,121,123,123,443]
            }, {
                type: 'column',
                name: 'Shoulders',
                data: [240, 267, 323, 233, 333,123,213,123,134,324,243,123]
            },
	       {
		type: 'column',
		name: 'Abs/Calves',
		data:  [100, 267, 323, 233, 333,123,213,123,134,324,243,123]
	    },
	       {
		   type: 'spline',
		   name: 'Total',
		   data: [800, 700, 1300, 1000, 1200, 700, 1200, 400, 500, 600, 1000, 1000]
	       },
		     /* {
                type: 'pie',
                name: 'Total consumption',
                data: [{
                    name: 'Guest',
                    y: 123,
                    color: '#4572A7' // Jane's color
                }, {
                    name: 'Member',
                    y: 233,
                    color: '#AA4643' // John's color
                }, {
                    name: 'Admin',
                    y: 129,
                    color: '#89A54E' // Joe's color
                }],
                center: [100, 80],
                size: 100,
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            }*/]
        });
    });

});
