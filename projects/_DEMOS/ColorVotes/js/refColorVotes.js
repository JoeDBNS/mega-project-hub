// Set Firebase Database Variable
    var database = firebase.database();

// Set Color Variables
    var cntRed = 0;
    var cntBlue = 0;
    var cntGreen = 0;
    var cntYellow = 0;

// For Google Chart On Page
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {
        var data = google.visualization.arrayToDataTable([
            ['Color', 'Count', { role: 'style' }],
            ['Red', cntRed, 'fill-color: red;'],
            ['Blue', cntBlue, 'fill-color: blue;'],
            ['Green', cntGreen, 'fill-color: green;'],
            ['Yellow', cntYellow, 'fill-color: yellow;']
        ]);

        var options = {
            title: 'Color Click Distribution Chart',
            width: 500,
            height: 300,
            chartArea: {width: '75%'},
            hAxis: {
            title: 'Count',
            minValue: 0,
            },
            vAxis: {
            title: 'Color'
            }
        };

        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

        chart.draw(data, options);
    }

// On Color Value Changes In Database...
    var colorRed = database.ref('ColorValues/Red');
    colorRed.on('value', function(snapshot) {
        cntRed = snapshot.val();
        drawBasic();
    });
    
    var colorBlue = database.ref('ColorValues/Blue');
    colorBlue.on('value', function(snapshot) {
        cntBlue = snapshot.val();
        drawBasic();
    });

    var colorGreen = database.ref('ColorValues/Green');
    colorGreen.on('value', function(snapshot) {
        cntGreen = snapshot.val();
        drawBasic();
    });

    var colorYellow = database.ref('ColorValues/Yellow');
    colorYellow.on('value', function(snapshot) {
        cntYellow = snapshot.val();
        drawBasic();
    });

// On Color Button Click...
    $('.btnColor').on('click', function() {
        switch (this.id) {
            case 'btnRed':
                database.ref('ColorValues/').update({
                    Red: cntRed + 1
                });
                break;
        
                case 'btnBlue':
                database.ref('ColorValues/').update({
                    Blue: cntBlue + 1
                });
                break;
        
                case 'btnGreen':
                database.ref('ColorValues/').update({
                    Green: cntGreen + 1
                });
                break;
        
                case 'btnYellow':
                database.ref('ColorValues/').update({
                    Yellow: cntYellow + 1
                });
                break;
        }
    });