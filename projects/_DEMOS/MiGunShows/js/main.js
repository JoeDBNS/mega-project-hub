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
let fire_dbRefEvents = fire_db.ref('Events');
let fire_storageRef = fire_app.storage();


var eventInfo = new Vue({
    el: '#container',
    data: {
        eventToday: 0,
        allEventShow: 0,
        EventFilter: {
            show: 0,
            city: '',
            month: '',
            cost: 0
        },
        Months: [
            { name: 'January', name_sml: 'Jan', number: 1 },
            { name: 'February', name_sml: 'Feb', number: 2 },
            { name: 'March', name_sml: 'Mar', number: 3 },
            { name: 'April', name_sml: 'Apr', number: 4 },
            { name: 'May', name_sml: 'May', number: 5 },
            { name: 'June', name_sml: 'Jun', number: 6 },
            { name: 'July', name_sml: 'Jul', number: 7 },
            { name: 'August', name_sml: 'Aug', number: 8 },
            { name: 'September', name_sml: 'Sep', number: 9 },
            { name: 'October', name_sml: 'Oct', number: 10 },
            { name: 'November', name_sml: 'Nov', number: 11 },
            { name: 'December', name_sml: 'Dec', number: 12 }
        ],
        curDate: {
            month: GetDate('month'),
            day: GetDate('day')
        }
    },
    methods: {
        FilterCheck: function (event) {
            eventInfo.EventFilter.city = '';
            eventInfo.EventFilter.month = '';
            eventInfo.EventFilter.cost = 0;
        },
        EventPopUp: function (eventInfo) {
            swal({
                title: '<u>' + eventInfo.name + '</u>',
                html: 
                    '<img src="' + eventInfo.imageUrl + '" alt="' + eventInfo.image + '"  width="95%" class="eventPopupImage">' +
                    '<div class="col-1-1">' +
                    '   <div class="textAlignLeft eventPopupContentHeader col-1-1"><b>Address:</b></div>' +
                    '   <div class="eventPopupContent col-1-1">' +
                    '   	<a target="_blank" href="https://www.google.com/maps?q=' + eventInfo.address + ', ' + eventInfo.city + ', MI">' +
                    '   		<div>' +
                    '               <b class="eventPopupAddressBuilding">' + eventInfo.building + '</b>' +
                    '   		    <br> ' + eventInfo.address + ', ' + eventInfo.city + ', MI' +
                    '           </div>' +
                    '   	</a>' +
                    '   </div>' +
                    '</div>' +
                    '<div class="col-6-12 mobile-col-1-1">' +
                    '	<div class="textAlignLeft eventPopupContentHeader col-1-1"><b>Date:</b></div>' +
                    '	<div class="eventPopupContent col-1-1 textAlignCenter">' + eventInfo.beginDate.month + '/' + eventInfo.beginDate.day + ' - ' + eventInfo.endDate.month + '/' + eventInfo.endDate.day + '</div>' +
                    '</div>' +
                    '<div class="col-1-12 hide_on_mobile"></div>' +
                    '<div class="col-5-12 mobile-col-1-1">' +
                    '	<div class="textAlignLeft eventPopupContentHeader col-1-1"><b>Cost:</b></div>' +
                    '	<div class="eventPopupContent col-1-1" textAlignCenter>$' + eventInfo.cost + '</div>' +
                    '</div>' +
                    '<div class="textAlignLeft eventPopupContentHeader col-1-1"><b>Notes:</b></div>' +
                    '<div class="eventPopupContent col-1-1">' + eventInfo.notes + '</div>',
                confirmButtonText: 'Done'
            })
        }
    },
    firebase: {
        Events_Vue: {
            source: fire_dbRefEvents,
            readyCallback: function() {
                this.$nextTick(function () {
                    CheckUpcoming();
                })
            }
        }
    },
    computed: {
        orderedEvents_Vue: function() {
            return _.sortBy(this.Events_Vue, ['beginDate.month', 'beginDate.day'])
        },
        upcomingEvents_Vue: function () {
            var tmpAllEventsOrdered = this.orderedEvents_Vue;
            var tmpFilteredEventsOrdered = [];

            $(tmpAllEventsOrdered).each(function () {
                if (((this.beginDate.month == eventInfo.curDate.month)
                    && (this.beginDate.day >= eventInfo.curDate.day)
                    && (tmpFilteredEventsOrdered.length < 2))
                || ((this.beginDate.month > eventInfo.curDate.month)
                        && (tmpFilteredEventsOrdered.length < 2))) {
                    tmpFilteredEventsOrdered.push(this);
                }
            });

            return tmpFilteredEventsOrdered;
        },
        todayEvents_Vue: function () {
            var tmpAllEventsOrdered = this.orderedEvents_Vue;
            var tmpFilteredEventsOrdered = [];

            $(tmpAllEventsOrdered).each(function () {
                if (((this.beginDate.month <= eventInfo.curDate.month)
                    && (this.beginDate.day <= eventInfo.curDate.day)
                    && (tmpFilteredEventsOrdered.length < 1))
                && ((this.endDate.month >= eventInfo.curDate.month)
                        && (this.endDate.day >= eventInfo.curDate.day)
                        && (tmpFilteredEventsOrdered.length < 1))) {
                    tmpFilteredEventsOrdered.push(this);
                    eventInfo.eventToday = 1;
                }
            });

            return tmpFilteredEventsOrdered;
        },
        eventCities: function () {
            var tmpAllEvents = this.Events_Vue;
            var tmpFilteredEvents = [];

            $(tmpAllEvents).each(function() {
                if (tmpFilteredEvents.indexOf(this.city) == -1) {
                    tmpFilteredEvents.push(this.city);
                }
            });

            return _.orderBy(_.uniqBy(tmpFilteredEvents));
        }
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
    }
}

function CheckUpcoming() {
    var upcomingCount = $('#eventsUpcoming .event').length;

    if (upcomingCount < 1) {
        $('#eventsUpcoming')[0].innerHTML = '<div class="col-1-1"><h3><u>Upcoming Events</u></h3></div><div class="col-1-1"><h4>⚠️ There are no upcoming events ⚠️</h4></div>';
        // eventInfo.allEventShow = 1;
    }
}

function CheckTodayEvent() {
    var upcomingCount = $('#eventsUpcoming .event').length;

    if (upcomingCount < 1) {
        $('#eventsUpcoming')[0].innerHTML = '<div class="col-1-1"><h3><u>Upcoming Events</u></h3></div><div class="col-1-1"><h4>⚠️ There are no upcoming events ⚠️</h4></div>';
        eventInfo.allEventShow = 1;
        return 1;
    }
    return 0;
}