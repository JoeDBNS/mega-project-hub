// Initialize Firebase
let config = {
    apiKey: "AIzaSyAEAPH7RslomArHanRmmBFkMkq48Go93Rg",
    authDomain: "migunshows2018.firebaseapp.com",
    databaseURL: "https://migunshows2018.firebaseio.com",
    projectId: "migunshows2018",
    storageBucket: "migunshows2018.appspot.com",
    messagingSenderId: "1000663929063"
};

let fire_app = firebase.initializeApp(config);
let fire_db = fire_app.database();
let fire_dbRefUsers = fire_db.ref('Users');


var DiscountInfo = new Vue({
    el: '#container',
    data: {
        session: {
            name: '',
            email: '',
            address: {
                street: '',
                city: '',
                state: ''
            },
            curDate: {
                month: GetDate('month'),
                day: GetDate('day'),
                year: GetDate('year')
            }
        },
        states: [
            "Alaska",
            "Alabama",
            "Arkansas",
            "American Samoa",
            "Arizona",
            "California",
            "Colorado",
            "Connecticut",
            "District of Columbia",
            "Delaware",
            "Florida",
            "Georgia",
            "Guam",
            "Hawaii",
            "Iowa",
            "Idaho",
            "Illinois",
            "Indiana",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Massachusetts",
            "Maryland",
            "Maine",
            "Michigan",
            "Minnesota",
            "Missouri",
            "Mississippi",
            "Montana",
            "North Carolina",
            "North Dakota",
            "Nebraska",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "Nevada",
            "New York",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Puerto Rico",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Virginia",
            "Virgin Islands",
            "Vermont",
            "Washington",
            "Wisconsin",
            "West Virginia",
            "Wyoming"
        ]
    },
    methods: {
        EventPopUp: function (info) {
            swal({
                title: '<u>testing</u>',
                confirmButtonText: 'Done'
            })
        }
    }
});

// Required Inputs
    $('.inputField').on('keyup', function() {
        if (this.value != "") {
            $(this).removeClass('isRequired');
        }
        else {
            $(this).addClass('isRequired');
        }
    });
    $('.inputField').on('change', function() {
        if (this.value != '') {
            $(this).removeClass('isRequired');
        }
        else {
            $(this).addClass('isRequired');
        }
    });
    $('.inputField').on('paste', function() {
        if (this.value != '') {
            $(this).removeClass('isRequired');
        }
        else {
            $(this).addClass('isRequired');
        }
    });

function GetDate(x) {
    var date = new Date();
    switch (x) {
        case "month":
            return date.getMonth() + 1;
            break;
        case "day":
            return date.getDate();
            break;
        case "year":
            return date.getFullYear();
            break;
    }
}

function CheckUpcoming() {
    var upcomingCount = $('#eventsUpcoming .event').length;

    if (upcomingCount < 1) {
        $('#eventsUpcoming')[0].innerHTML = '<div class="col-1-1"><h3><u>Upcoming Events</u></h3></div><div class="col-1-1"><h4>⚠️ There are no upcoming events ⚠️</h4></div>';
        eventInfo.allEventShow = 1;
    }
}