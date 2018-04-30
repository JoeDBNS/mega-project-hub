/*==================================================

Date: 04-24-2018
Author: Joseph Davis
Project: mega-project-hub

==================================================*/

// Vue
	var MainVue = new Vue({
		el: '#container',
		data: {
			session: {
				date: GetTodayDate(),
				showComputerScreen: 0,
				selectedProject: {
					name: "Terminal Website",
					folder: 'projects/TerminalWebsite/index.html',
					color: '',
					features: [
						"JavaScript",
						"Vue.js",
						"JSON"
					]
				},
				showFolderInfo: 0,
				selectedWork: {
					employer: "State of Michigan",
					department: 'DTMB - Agency Services',
					dateBegin: 'Mar 2017',
					dateEnd: 'Present',
					title: 'Web and Software Developer'
				}
			},
			Projects: [
				{
					name: "Terminal Website",
					folder: 'projects/TerminalWebsite/index.html',
					color: '',
					features: [
						"JavaScript",
						"Vue.js",
						"JSON"
					]
				},
				{
					name: "Michigan Gun Shows",
					folder: 'projects/MiGunShows/index.html',
					color: '',
					features: [
						"Vue.js",
						"Firebase",
						"SimpleGrid"
					]
				}
			],
			Works: [
				{
					employer: "State of Michigan",
					department: 'DTMB - Agency Services',
					dateBegin: 'Mar 2017',
					dateEnd: 'Present',
					title: 'Web and Software Developer'
				},
				{
					employer: "Eaton County",
					department: 'Technology Services',
					dateBegin: 'Oct 2016',
					dateEnd: 'Oct 2017',
					title: 'Computer Technician Intern'
				},
				{
					employer: "State of Michigan",
					department: 'DTMB - Design & Delivery',
					dateBegin: 'Nov 2015',
					dateEnd: 'Mar 2017',
					title: 'IT Student Assistant'
				}
			]
		},
		methods: {
			ProjectSelect: function(project) {
				this.session.showComputerScreen = 1;
				this.session.selectedProject = project;
			},
			WorkSelect: function(work) {
				$('.work').each(function() {
					$(this).removeClass('workSelected')
				});
				if ($(event.path[0]).hasClass('work')) {
					$(event.path[0]).addClass('workSelected');
				}
				else if (event.srcElement.localName == 'p') {
					$(event.path[1]).addClass('workSelected');
				}
				else if (event.srcElement.localName == 'b') {
					$(event.path[2]).addClass('workSelected');
				}
				this.session.selectedWork = work;
				this.session.showFolderInfo = 1;
			}
		},
		computed: {
			Folder_Active: function() {
				var activeItems = [''];
				this.Folders.forEach(folder => {
					if (folder.name == this.session.dirCur) {
						activeItems = folder.items;
					}
				});
				return activeItems;
			}
		}
	});

// For Vue Values
	function GetTodayDate() {
		var date = new Date();
		var dateFormat = date.getMonth().toString() + "-" + (date.getDay() + 1).toString() + "-" + date.getFullYear().toString();
		return dateFormat;
	}