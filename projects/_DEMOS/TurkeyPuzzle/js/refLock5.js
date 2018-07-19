// Get a reference to the database service
    var database = firebase.database();

// Puzzle completion values for later reference
    var p1 = 0;
    var p2 = 0;
    var p3 = 0;
    var p4 = 0;
    var p5 = 0;

// Find if puzzle has been comleted already
    $(document).ready(function() {
        database.ref('PuzzleProgress/lock5').once('value').then(function(snapshot) {
            var lock5Val = (snapshot.val());
            if (lock5Val != 0) {
                p5 = lock5Val;
                CheckPuzzles();
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
        if (p1 == 1 && p2 == 1 && p3 == 1 && p4 == 1 && p5 == 1) {
            $('#txtTag').hide();
            $('#txtShow').show();
            $('#line1').html(atob("QWlyIHRpZ2h0LA=="));
            $('#line2').html(atob("QWxsIHdpdGhpbiBzaWdodCw="));
            $('#line3').html(atob("VGhlcmUncyBwbGVudHkgb2YgbGlnaHQs"));
            $('#line4').html(atob("VGhvdWdoIHNwYWNlIGlzIGZpbml0ZSw="));
            $('#line5').html(atob("SXQgY2FuIHN0YW5kIGEgZmlnaHQs"));
            $('#line6').html(atob("V2hpbGUgaXQgaG9sZHMgYSBzaXRlLg=="));
            $('#line7').html(atob("Tm90IGluIHRoZSBzaXRlLA=="));
            $('#line8').html(atob("QnV0IHJpZ2h0IGFjcm9zcyw="));
            $('#line9').html(atob("U2l0cyBhIHN0cnVjdHVyZSw="));
            $('#line10').html(atob("SG9sZGluZyBkcm9zcy4="));
            $('#line11').html(atob("Tm90IHRvIGhpZ2gs"));
            $('#line12').html(atob("Tm90IHRvbyBsb3cs"));
            $('#line13').html(atob("U2l0cyBhIG1pbmkgd29ybGQs"));
            $('#line14').html(atob("V2hlcmUgdGhlIHBsYW50cyBkb24ndCBncm93Lg=="));

        }
    }