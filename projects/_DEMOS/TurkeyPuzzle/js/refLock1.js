// Get a reference to the database service
var database = firebase.database();

// Find if puzzle has been comleted already
    $(document).ready(function() {
        database.ref('PuzzleProgress/lock2').once('value').then(function(snapshot) {
        var lock2Val = (snapshot.val());
            if (lock2Val != 0) {
                alert('This Puzzle Has Been Completed.');
            }
        });
    });

// Find CheckBox value and show respective number
    $('.chkBoxInp').on('change', function() {
        checkCheck();
    });

    function checkCheck() {
        $('.chkBoxInp').each(function() {
            if (this.checked == true) {
                var chkNum = "#" + $(this).parent().parent()[0].id.split('Chk').join("Disp");
                $(chkNum).children()[0].innerText = '1';
            }
            else if (this.checked == false) {
                var chkNum = "#" + $(this).parent().parent()[0].id.split('Chk').join("Disp");
                $(chkNum).children()[0].innerText = '0';
            }
        });
    }

// Find the current puzzle value and check it
    $('#btnCheck').on('click', function() {
        var puzVal = '';
        $('.numDispSpan').each(function() {
            puzVal += $(this)[0].innerText;
        });

        var puzKey = database.ref('PuzLock1/key');
        puzKey.on('value', function(snapshot) {
            if (puzVal == snapshot.val()) {
                database.ref('PuzzleProgress/').update({
                    lock2: 1
                });
                window.location.href = "TurkeyQuest.html";
            }
            else {
                $("#btnCheck").effect("shake");
            }
        });
    });