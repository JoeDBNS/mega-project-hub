// Get a reference to the database service
    var database = firebase.database();

// Puzzle completion values for later reference
    var p1 = 0;
    var p2 = 0;
    var p3 = 0;
    var p4 = 0;

// Find if puzzle has been comleted already
    $(document).ready(function() {
        database.ref('PuzzleProgress/lock5').once('value').then(function(snapshot) {
        var lock5Val = (snapshot.val());
            if (lock5Val != 0) {
                alert('This Puzzle Has Been Completed.');
            }
        });

        database.ref('PuzzleProgress/lock4').once('value').then(function(snapshot) {
        var lock4Val = (snapshot.val());
            if (lock4Val != 0) {
                p4 = lock4Val;
                CheckPuzzles();
            }
        });

        database.ref('PuzzleProgress/lock3').once('value').then(function(snapshot) {
        var lock3Val = (snapshot.val());
            if (lock3Val != 0) {
                p3 = lock3Val;
                CheckPuzzles();
            }
        });

        database.ref('PuzzleProgress/lock2').once('value').then(function (snapshot) {
            var lock2Val = (snapshot.val());
            if (lock2Val != 0) {
                p2 = lock2Val;
                CheckPuzzles();
            }
        });

        database.ref('PuzzleProgress/lock1').once('value').then(function(snapshot) {
        var lock1Val = (snapshot.val());
            if (lock1Val != 0) {
                p1 = lock1Val;
                CheckPuzzles();
            }
        });
    });

// Check previous puzzle completion
    function CheckPuzzles() {
        if (p1 == 1 && p2 == 1 && p3 == 1 && p4 == 1) {
            $('#btnDown').prop('href', atob("ZmlsZXMvZG9udFVwbG9hZC9GaW5UdXJrZXkubXA0"));
            $('#delete').hide();
        }
    }

// Button Clicks
    $('#btnDown').on('click', function() {
        if (p1 == 1 && p2 == 1 && p3 == 1 && p4 == 1) {
            database.ref('PuzzleProgress/').update({
                lock5: 1
            });
        }
        window.location.href = "TurkeyQuest.html";
    });