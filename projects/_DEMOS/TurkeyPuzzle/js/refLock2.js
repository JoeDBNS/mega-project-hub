// Get a reference to the database service
var database = firebase.database();

// Find if puzzle has been comleted already
    $(document).ready(function() {
        database.ref('PuzzleProgress/lock3').once('value').then(function(snapshot) {
        var lock3Val = (snapshot.val());
            if (lock3Val != 0) {
                alert('This Puzzle Has Been Completed.');
            }
        });
    });
    
// Find the current puzzle value and check it
    $('#btnCheck').on('click', function() {
        var puzVal = '';
        $('.answerNum').each(function() {
            puzVal += $(this)[0].value.toString();
        });

        var puzKey = database.ref('PuzLock2/key');
        puzKey.on('value', function(snapshot) {
            if (puzVal == snapshot.val()) {
                database.ref('PuzzleProgress/').update({
                    lock3: 1
                });
                window.location.href = "TurkeyQuest.html";
            }
            else {
                $("#btnCheck").effect("shake");
            }
        });
    });