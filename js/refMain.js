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
			],
			Skills: [
				{
					name: 'HTML5',
					image: 'images/skills/HTML5.png',
					style: {
						top: '20px',
						left: GetFridgeMagnets()
					}
				},
				{
					name: 'CSS3',
					image: 'images/skills/CSS3.png',
					style: {
						top: '66px',
						left: GetFridgeMagnets()
					}
				},
				{
					name: 'JavaScript',
					image: 'images/skills/JavaScript.png',
					style: {
						top: '114px',
						left: GetFridgeMagnets()
					}
				},
				{
					name: 'Google Maps API',
					image: 'images/skills/GoogleMaps.png',
					style: {
						top: '160px',
						left: GetFridgeMagnets()
					}
				},
				{
					name: 'Bootstrap',
					image: 'images/skills/Bootstrap.png',
					style: {
						top: '206px',
						left: GetFridgeMagnets()
					}
				},
				{
					name: 'Vue.js',
					image: 'images/skills/Vue.png',
					style: {
						top: '264px',
						left: GetFridgeMagnets()
					}
				},
				{
					name: 'Google Firebase',
					image: 'images/skills/Firebase.png',
					style: {
						top: '308px',
						left: GetFridgeMagnets()
					}
				},
				{
					name: 'Adobe Photoshop',
					image: 'images/skills/Photoshop.png',
					style: {
						top: '354px',
						left: GetFridgeMagnets()
					}
				},
				{
					name: 'Gimp',
					image: 'images/skills/Gimp.png',
					style: {
						top: '400px',
						left: GetFridgeMagnets()
					}
				},
				{
					name: 'Python',
					image: 'images/skills/Python.png',
					style: {
						top: '446px',
						left: GetFridgeMagnets()
					}
				},
				{
					name: 'C#',
					image: 'images/skills/Csharp.png',
					style: {
						top: '492px',
						left: GetFridgeMagnets()
					}
				},
				{
					name: 'SQL',
					image: 'images/skills/SQL.png',
					style: {
						top: '538px',
						left: GetFridgeMagnets()
					}
				},
				{
					name: 'Microsoft Dynamics CRM',
					image: 'images/skills/MicrosoftDynamics.png',
					style: {
						top: '584px',
						left: GetFridgeMagnets()
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
		if (nVal == 1)
			var tString = "rotate(-" + tVal + "deg)"
		else
			var tString = "rotate(" + tVal + "deg)"
		return tString;
	}
	function GetFridgeMagnets() {
		var elmWidth = document.getElementById("fridge").offsetWidth;
		var elmWidthCount = (elmWidth/40).toString().split(".")[0] - 2;
		var xPos = Math.floor((Math.random() * elmWidthCount) + 1);
		return ((40 * xPos).toString() + "px");
	}