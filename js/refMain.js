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
						"SimpleGrid",
						"Responsive Design"
					]
				},
				{
					name: "StepForward Michigan",
					folder: 'projects/StepForward/index.html',
					color: '',
					features: [
						"JavaScript",
						"Responsive Design",
						"Formatted Printing"
					]
				},
				{
					name: "TinyMCE Letters",
					folder: 'projects/TinyMCE/index.html',
					color: '',
					features: [
						"JavaScript",
						"TinyMCE",
						"Formatted Printing"
					]
				},
				{
					name: "ColorVoter",
					folder: 'projects/ColorVotes/index.html',
					color: '',
					features: [
						"JavaScript",
						"Firebase",
						"Game"
					]
				}
			],
			Jobs: [
				{
					employer: "State of Michigan",
					department: 'DTMB - Agency Services',
					title: 'Web and Software Developer',
					dateBegin: 'Mar 2017',
					dateEnd: 'Present',
					length: '13+',
					style: {
						transform: GetTransformValue(),
						top: '26px',
						left: '40px'
					}
				},
				{
					employer: "Eaton County",
					department: 'Technology Services',
					title: 'Computer Technician Intern',
					dateBegin: 'Oct 2016',
					dateEnd: 'Oct 2017',
					length: '12',
					style: {
						transform: GetTransformValue(),
						top: '230px',
						left: '110px'
					}
				},
				{
					employer: "State of Michigan",
					department: 'DTMB - Design & Delivery',
					title: 'IT Student Assistant',
					dateBegin: 'Nov 2015',
					dateEnd: 'Mar 2017',
					length: '17',
					style: {
						transform: GetTransformValue(),
						top: '54px',
						left: '210px'
					}
				},
				{
					employer: "Best Buy",
					department: 'Computer Dept.',
					title: 'Sales Consultant',
					dateBegin: 'Mar 2015',
					dateEnd: 'Jun 2016',
					length: '16',
					style: {
						transform: GetTransformValue(),
						top: '216px',
						left: '310px'
					}
				},
				{
					employer: "Advanced Rheumatology",
					department: 'IT Support',
					title: 'Computer and Data Technician',
					dateBegin: '___ 201_',
					dateEnd: '___ 201_',
					length: '__',
					style: {
						transform: GetTransformValue(),
						top: '30px',
						left: '400px'
					}
				},
				{
					employer: "Charlotte High School",
					department: 'IT Dept.',
					title: 'Computer Technician Intern',
					dateBegin: '___ 201_',
					dateEnd: '___ 201_',
					length: '__',
					style: {
						transform: GetTransformValue(),
						top: '240px',
						left: '484px'
					}
				}
			]
		},
		methods: {
			ProjectSelect: function(project) {
				this.session.showComputerScreen = 1;
				this.session.selectedProject = project;
			},
			JobClicked: function(job) {
				swal({
					title: job.title,
					text: job.employer
				});
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
	function GetTransformValue() {
		var nVal = Math.floor((Math.random() * 2) + 1);
		var tVal = Math.floor((Math.random() * 6) + 1);
		if (nVal == 1) {
			var tString = "rotate(-" + tVal + "deg)"
		}
		else
			var tString = "rotate(" + tVal + "deg)"
		return tString;
	}