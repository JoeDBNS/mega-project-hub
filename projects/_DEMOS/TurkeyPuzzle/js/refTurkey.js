// Get a reference to the database service
    var database = firebase.database();

// Lock Listeners
    var lock1Val = database.ref('PuzzleProgress/lock1');
    lock1Val.on('value', function(snapshot) {
        updateTurkLock("Lock 1", snapshot.val());
    });
    var lock2Val = database.ref('PuzzleProgress/lock2');
    lock2Val.on('value', function(snapshot) {
        updateTurkLock("Lock 2", snapshot.val());
    });
    var lock3Val = database.ref('PuzzleProgress/lock3');
    lock3Val.on('value', function(snapshot) {
        updateTurkLock("Lock 3", snapshot.val());
    });
    var lock4Val = database.ref('PuzzleProgress/lock4');
    lock4Val.on('value', function(snapshot) {
        updateTurkLock("Lock 4", snapshot.val());
    });
    var lock5Val = database.ref('PuzzleProgress/lock5');
    lock5Val.on('value', function(snapshot) {
        updateTurkLock("Lock 5", snapshot.val());
    });

function updateTurkLock(lock, value) {
    if (value == "0") {
        switch (lock) {
            case "Lock 1":
                document.getElementById("imgLock1").src = 'Images/lock_Locked.png';
                document.getElementById("aLock1").href = "#";
                $("#imgLock1").addClass("shake-slow shake-freeze");
                break;
            case "Lock 2":
                document.getElementById("imgLock2").src = 'Images/lock_Locked.png';
                document.getElementById("aLock2").href = "#";
                $("#imgLock2").addClass("shake-slow shake-freeze");
                break;
            case "Lock 3":
                document.getElementById("imgLock3").src = 'Images/lock_Locked.png';
                document.getElementById("aLock3").href = "#";
                $("#imgLock3").addClass("shake-slow shake-freeze");
                break;
            case "Lock 4":
                document.getElementById("imgLock4").src = 'Images/lock_Locked.png';
                document.getElementById("aLock4").href = "#";
                $("#imgLock4").addClass("shake-slow shake-freeze");
                break;
            case "Lock 5":
                document.getElementById("imgLock5").src = 'Images/lock_Locked.png';
                document.getElementById("aLock5").href = "#";
                $("#imgLock5").addClass("shake-slow shake-freeze");
                break;
        }
    }
    else if (value != "0") {
        switch (lock) {
            case "Lock 1":
                if (true) {
                    var lock1Href = database.ref('LockLinks/lock1');
                    lock1Href.on('value', function(snapshot) {
                        document.getElementById("aLock1").href = snapshot.val() + ".html";
                    });
                    document.getElementById("imgLock1").src = 'Images/lock_Unlocked.png';
                    $("#imgLock1").removeClass("shake-slow shake-freeze");
                }
                break;
            case "Lock 2":
                var lock2Href = database.ref('LockLinks/lock2');
                lock2Href.on('value', function(snapshot) {
                    document.getElementById("aLock2").href = snapshot.val() + ".html";
                });
                document.getElementById("imgLock2").src = 'Images/lock_Unlocked.png';
                $("#imgLock2").removeClass("shake-slow shake-freeze");
                break;
            case "Lock 3":
                var lock3Href = database.ref('LockLinks/lock3');
                lock3Href.on('value', function(snapshot) {
                    document.getElementById("aLock3").href = snapshot.val() + ".html";
                });
                document.getElementById("imgLock3").src = 'Images/lock_Unlocked.png';
                $("#imgLock3").removeClass("shake-slow shake-freeze");
                break;
            case "Lock 4":
                var lock4Href = database.ref('LockLinks/lock4');
                lock4Href.on('value', function(snapshot) {
                    document.getElementById("aLock4").href = snapshot.val() + ".html";
                });
                document.getElementById("imgLock4").src = 'Images/lock_Unlocked.png';
                $("#imgLock4").removeClass("shake-slow shake-freeze");
                break;
            case "Lock 5":
                var lock5Href = database.ref('LockLinks/lock5');
                lock5Href.on('value', function(snapshot) {
                    document.getElementById("aLock5").href = snapshot.val() + ".html";
                });
                document.getElementById("imgLock5").src = 'Images/lock_Unlocked.png';
                $("#imgLock5").removeClass("shake-slow shake-freeze");
                break;
        }
    }
}

function clickFunction() {
    alert('');
}

// function clickFunction() {
//     database.ref('PuzzleProgress/').update({
//         lock1: 1,
//         lock3: 1,
//         lock4: 1
//     });
// }

// function clickResetFunction() {
//     firebase.database().ref('PuzzleProgress/').update({
//         lock1: 0, 
//         lock2: 0, 
//         lock3: 0, 
//         lock4: 0, 
//         lock5: 0, 
//         lock6: 0
//     });
// }