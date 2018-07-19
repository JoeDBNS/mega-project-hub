// Get a reference to the database service
var database = firebase.database();

// Find if puzzle has been comleted already
    $(document).ready(function() {
        database.ref('PuzzleProgress/lock4').once('value').then(function(snapshot) {
        var lock4Val = (snapshot.val());
            if (lock4Val != 0) {
                alert('This Puzzle Has Been Completed.');
            }
        });
    });


// Find the current puzzle value and check it
    $('#btnCheck').on('click', function () {
        var puzVal = '';
        $('.inputs').each(function () {
            puzVal += $(this).val().toLowerCase();
        });

        var puzKey = database.ref('PuzLock3/key');
        puzKey.on('value', function (snapshot) {
            if (puzVal == snapshot.val()) {
                database.ref('PuzzleProgress/').update({
                    lock4: 1
                });
                window.location.href = "TurkeyQuest.html";
            }
            else {
                $("#btnCheck").effect("shake");
            }
        });
    });