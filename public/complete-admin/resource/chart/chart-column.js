$(function () {
    var chart;
    $(document).ready(function() {

        var colors = Highcharts.getOptions().colors,
            categories = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            name = 'Weekly activity',
            data = [{
                y: 70,
                color: colors[0],
                drilldown: {
                    name: 'Chest/Triceps/Abs',
                    categories: ['Chest', 'Triceps', 'Abs'],
                    data: [20, 20, 30],
                    color: colors[0]
                }
            }, {
                y: 50,
                color: colors[1],
                drilldown: {
                    name: 'Back/Biceps/Calves',
                    categories: ['Back', 'Biceps', 'Calves'],
                    data: [20, 20, 10],
                    color: colors[1]
                }
            }, {
                y: 100,
                color: colors[2],
                drilldown: {
                    name: 'Rest/Stretching/Abs',
                    categories: ['Low cardio', 'Stretching', 'Abs'],
                    data: [50, 20, 30],
                    color: colors[2]
                }
            }, {
                y: 60,
                color: colors[3],
                drilldown: {
                    name: 'Legs'
                }
            }, {
                y: 50,
                color: colors[4],
                drilldown: {
                    name: 'Shoulder/Biceps',
                    categories: ['Shoulders', 'Biceps'],
                    data: [ 30, 20 ],
                    color: colors[4]
                }
            }];

        function setChart(name, categories, data, color) {
            chart.xAxis[0].setCategories(categories);
            chart.series[0].remove();
            chart.addSeries({
                name: name,
                data: data,
                color: color || 'white'
            });
        }

        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'column',
                type: 'column'
            },
            title: {
                text: 'Weekly activity'
            },
            subtitle: {
                text: 'Click the columns to view exercises. Click again to view days.'
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                title: {
                    text: 'Total minutes'
                }
            },
            plotOptions: {
                column: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function() {
                                var drilldown = this.drilldown;
                                if (drilldown && drilldown.categories) { // drill down
                                    setChart(drilldown.name, drilldown.categories, drilldown.data, drilldown.color);
                                } else { // restore
                                    setChart(name, categories, data);
                                }
                            }
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        color: colors[0],
                        style: {
                            fontWeight: 'bold'
                        },
                        formatter: function() {
                            return this.y; // +'%';
                        }
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    var point = this.point,
                        s = this.x +':<b>'+ this.y +' minutes </b><br/>';
                    if (point.drilldown) {
                        s += 'Click to view '+ point.category +' exercises';
                    } else {
                        s += 'Click to return to daily activity';
                    }
                    return s;
                }
            },
            series: [{
                name: name,
                data: data,
                color: 'white'
            }],
            exporting: {
                enabled: false
            }
        });
    });

});
