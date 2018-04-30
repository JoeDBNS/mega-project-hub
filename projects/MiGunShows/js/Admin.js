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
let fire_dbRefImages = fire_db.ref('Images');


var eventInfo = new Vue({
    el: '#container',
    data: {
        newEventData: {
            name: '',
            building: '',
            address: '',
            city: '',
            beginDate: '',
            endDate: '',
            cost: null,
            image: '',
            notes: ''
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
        ]
    },
    methods: {
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
        },
        addEvent(newEventData) {
            var reqCount = $('.isRequired').length;

            if (reqCount == 0) {
                try {
                    beginDate = newEventData.beginDate.split('/');
                    beginMonth = parseInt(beginDate[0]);
                    beginDay = parseInt(beginDate[1]);
                    beginYear = parseInt(beginDate[2]);

                    endDate = newEventData.endDate.split('/');
                    endMonth = parseInt(endDate[0]);
                    endDay = parseInt(endDate[1]);
                    endYear = parseInt(endDate[2]);

                    this.$firebaseRefs.Events_Vue.push(
                        {
                            name: newEventData.name.trim(),
                            building: newEventData.building.trim(),
                            address: newEventData.address.trim(),
                            city: newEventData.city.trim(),
                            beginDate: {
                                month: beginMonth,
                                day: beginDay,
                                year: beginYear
                            },
                            endDate: {
                                month: endMonth,
                                day: endDay,
                                year: endYear
                            },
                            cost: parseInt(newEventData.cost), 
                            image: document.getElementById('imagePicker').selectedOptions[0].innerHTML,
                            imageUrl: newEventData.image,
                            notes: newEventData.notes.trim()
                        }
                    );
                } 
                catch (error) {
                    swal({
                        type: 'warning',
                        title: 'Bad Event Data',
                        text: 'Please Recheck New Event Data!'
                    })
                }
            }
            else {
                swal({
                    type: 'warning',
                    title: 'Empty Event Fields',
                    text: 'One Or More Required Event Fields Are Empty!'
                })
            }
        },
        deleteEvent: function (item) {
            if (confirm('Are you sure you want to delete "' + item.name + '" event?')) {
                this.$firebaseRefs.Events_Vue.child(item['.key']).remove();
            } else { }
        },
        editEvent: function (event) {
            console.log('Edit Event Triggered:\n\t' + event['.key'] + ' = ' + event.name);

            swal({
                title: '<b>Edit Event:</b>',
                type: 'question',
                html:
                    '<label class="col-1-1">Name: <input type="text" placeholder="Name" class="col-1-1 inputField isRequired" value="' + event.name + '"></label>' +
                    '<label class="col-1-1">Building: <input type="text" placeholder="Building" class="col-1-1 inputField isRequired" value="' + event.building + '"></label>' +
                    '<label class="col-1-1">Address: <input type="text" placeholder="Address" class="col-1-1 inputField isRequired" value="' + event.address + '"></label>' +
                    '<label class="col-1-1">City: <input type="text" placeholder="City" class="col-1-1 inputField isRequired" value="' + event.city + '"></label>',
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:'Submit',
                cancelButtonText:'Cancel'
            });
        },
        fileUpload: function(e) {
            var file = e.target.files[0];
            var imageName = file.name.replace('.jpg', '');
            
            if (file.name.split('.')[1] == '.jpg') {
                if (CheckFileName(imageName) == 0) {
                    var storageRef = firebase.storage().ref('Buildings/' + file.name);
                    var task = storageRef.put(file);

                    task.on('state_changed',
                        function progress(snapshot) {
                            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            document.getElementById('uploader').value = percentage;
                        },
                        function error(err) { console.log(err) },
                        function complete() {
                            var downloadURL = task.snapshot.downloadURL;

                            eventInfo.$firebaseRefs.Images_Vue.push(
                                {
                                    location: imageName,
                                    url: downloadURL
                                }
                            );
                            document.getElementById('uploader').value = 0;
                            document.getElementById('uploadComplete').innerHTML = 'Upload Complete!';
                        }
                    );
                }
                else {
                    swal({
                        title: 'Image Name Already Exists',
                        type: 'error',
                        html: 'Would you like to Overwrite ' + file.name + ' image?',
                        showCancelButton: true,
                        focusConfirm: false,
                        confirmButtonText: 'Overwrite',
                        cancelButtonText: 'Cancel',
                        preConfirm: function () {
                            var storageRef = firebase.storage().ref('Buildings/' + file.name);
                            var task = storageRef.put(file);

                            task.on('state_changed',
                                function progress(snapshot) {
                                    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                    document.getElementById('uploader').value = percentage;
                                },
                                function error(err) { console.log(err) },
                                function complete() {
                                    document.getElementById('uploader').value = 0;
                                    document.getElementById('uploadComplete').innerHTML = 'Overwrite Complete!';
                                }
                            );
                        }
                    });
                }
            }
            else {
                swal({
                    title: '<b>File Type Error</b>',
                    type: 'error',
                    html:
                        '<p><b>File extention</b> must be <b>.jpg</b> and must be <b>lowercase</b>.</p>' +
                        '<p><b><u>Examples:</u></b></p>' +
                        '<ul class="listNoStyle">' +
                            '<ul class="col-1-2 listNoStyle"><b><u>Bad:</u></b>' +
                                '<li>file.pdf</li>' +
                                '<li>image.JPG</li>' +
                                '<li>image.Jpeg</li>' +
                            '</ul>' +
                            '<ul class="col-1-2 listNoStyle"><b><u>Good:</u></b>' +
                                '<li>image.jpg</li>' +
                                '<li>image_test.jpg</li>' +
                                '<li>NameImage.jpg</li>' +
                            '</ul>' +
                        '</ul>'
                });
            }
        }
    },
    date() {
        return { }
    },
    firebase: {
        Events_Vue: {
            source: fire_dbRefEvents,
                readyCallback: function() {
                    this.$nextTick(function () {
                        $('#eventsManageTable').DataTable({
                            'paging': false
                        });
                    })
                }
        },
        Images_Vue: fire_dbRefImages
    },
    computed: {
        orderedEvents_Vue: function () {
            return _.sortBy(this.Events_Vue, ['beginDate.month', 'beginDate.day'])
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

// For jQuery Datepicker
    $('#datePickerBegin').datepicker({
        onSelect: function() {
            eventInfo.newEventData.beginDate = this.value;
            $(this).removeClass('isRequired');
        }
    });

    $('#datePickerEnd').datepicker({
        onSelect: function() {
            eventInfo.newEventData.endDate = this.value;
            $(this).removeClass('isRequired');
        }
    });

// For File Upload
    function CheckFileName(imageName) {
        var imgFound = 0;
        eventInfo.Images_Vue.forEach(element => {
            if (element.location == imageName) {
                imgFound++;
            }
        });
        if (imgFound > 0) {
            return 1;
        }
        else {
            return 0;
        }
    }