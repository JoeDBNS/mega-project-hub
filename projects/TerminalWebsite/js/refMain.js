/*==================================================

Date: 02-23-2017
Author: Joseph Davis
Project: Terminal Website

==================================================*/



// This could be used for sending people to site for specific purpose through QR codes with passing URL values:
	// Would get value, would paste into #input, then would call EnterPressed();
	// https://css-tricks.com/snippets/javascript/get-url-variables/


// Set Firebase Database Variable
	// Initialize Firebase
	// var config = {
	// 	apiKey: "AIzaSyC6AUUscqM2UKxxWvVj1hon_IWNwCnc88A",
	// 	authDomain: "terminal-website-project.firebaseapp.com",
	// 	databaseURL: "https://terminal-website-project.firebaseio.com",
	// 	projectId: "terminal-website-project",
	// 	storageBucket: "terminal-website-project.appspot.com",
	// 	messagingSenderId: "205173869088"
	// };
	// let fire_app = firebase.initializeApp(config);
	// let database = fire_app.database();


// Vue
	var MainInfo = new Vue({
		el: '#container',
		data: {
			session: {
				date: GetTodayDate(),
				user: "test",

				// Last and current folder
				dirLast: [""],
				dirCur: "home",
				
				// Holds info for Up and Down arrow functionality
				listPost: 0,
				statList: [""],

				// Show or Hide Help Dock
				helpShow: 0
			},
			Folders: [
				{
					name: "home",
					items: [
						"Author",
						"Site"
					]
				},
				{
					name: "site",
					items: [
						"Edit.modal",
						"About.modal"
					]
				},
				{
					name: "author",
					items: [
						"Projects",
						"Career.modal",
						"Contact_Info.modal",
						"Skills.modal"
					]
				},
				{
					name: "projects",
					items: [
						"Work",
						"School",
						"Personal"
					]
				},
				{
					name: "career",
					items: [
						"Employment",
						"School"
					]
				},
				{
					name: "employment",
					items: [
						"Present.modal",
						"Past.modal"
					]
				}
			]
		},
		methods: {
		// On 'Up' and 'Down' keypress in #inputConsoleText
			UpDown: function(event) {
				var code = event.keyCode;
				if (code == 40) {
					if (this.session.listPost < 0) {
						/* Do Nothing */
					}
					else if (this.session.listPost == 0) {
						document.getElementById("inputConsoleText").value = this.session.statList[this.session.listPost];
					}
					else if (this.session.listPost != 0) {
						this.session.listPost = this.session.listPost - 1
						document.getElementById("inputConsoleText").value = this.session.statList[this.session.listPost];
					}
					var charCount = $("#inputConsoleText").val().length;
					$("#inputConsoleText")[0].setSelectionRange(charCount, charCount);
				}
				else if (code == 38) {
					if (this.session.listPost < 0) {
						this.session.listPost = 0;
					}
					else if (this.session.listPost > this.session.statList.length - 2) {
						/* Do Nothing */
					}
					else {
						this.session.listPost = this.session.listPost + 1
						document.getElementById("inputConsoleText").value = this.session.statList[this.session.listPost];
					}
					var charCount = $("#inputConsoleText").val().length;
					$("#inputConsoleText")[0].setSelectionRange(charCount, charCount);
				}
			},
		// On 'Enter' keypress in #inputConsoleText
			EnterPressed: function() {
				outputConsoleText.scrollTop = outputConsoleText.scrollHeight; // Scrolls #outputConsoleText to bottom

				if (($("#inputConsoleText").val().replace(/ /g, '') != "")) {
					var input = document.getElementById("inputConsoleText").value.trim();
					var output = document.getElementById("outputConsoleText").value;

					output = output + "\n" + input;
					document.getElementById("outputConsoleText").value = output;
					document.getElementById("inputConsoleText").value = "";

					this.session.statList.splice(1, 0, input);
					this.session.listPost = 0;

					input = input.toLowerCase();
					this.EvalInput(input);

					outputConsoleText.scrollTop = outputConsoleText.scrollHeight; // Scrolls #outputConsoleText to bottom
				}
				$("#inputConsoleText").val('');
				return false;
			},
			EvalInput: function(input) {
				inputSplit = input.split(" ");
				switch (inputSplit[0]) {
				// NEO
					case "neo":
						$.getScript(atob('anMvbWF0cml4Lmpz'), function() {
							BuildMatrixCanvas();
						});
						break;
				// RESET (Full)
					case "reset":
						location.reload(true);
						break;
				// HELP
					case "help":
						if (typeof inputSplit[1] == "undefined") {
							this.UpdateOutput("<---------- HELP ----------<HELP    Provides help information for Joe commands.<CLS     Clears the screen.<LS      Lists all files in current directory.<CD      Opens specified directory.<OPEN    Opens specified file.<CLOSE   Closes open content.<MUSIC   Controls music.<<* Some features are currently in development.<--------------------------<");
						}
						switch (inputSplit[1]) {
							case "cd":
								this.UpdateOutput("<---------- HELP ----------<Opens specified directory.<<CD ..<CD [folder]<--------------------------<");
								break;
							case "cls":
								this.UpdateOutput("<---------- HELP ----------<Clears the screen.<<CLS<--------------------------<");
								break;
							case "ls":
								this.UpdateOutput("<---------- HELP ----------<Lists all files in current directory.<<LS<--------------------------<");
								break;
							case "open":
								this.UpdateOutput("<---------- HELP ----------<Opens specified file.<<OPEN [file].[extension]<--------------------------<");
								break;
							case "close":
								this.UpdateOutput("<---------- HELP ----------<Closes open content.<<CLOSE<--------------------------<");
								break;
							case "music":
								this.UpdateOutput("<---------- HELP ----------<Controls music.<<MUSIC PLAY\tStarts or continues music.<MUSIC PAUSE\tPauses music at its current point.<MUSIC STOP\tStops and resets music.<--------------------------<");
								break;
						};
						break;
				// CLEAR
					case "cls":
						this.ClearOutput();
						break;
				// MUSIC
					case "music":
						switch (inputSplit[1]) {
							case "play":
								var msc = document.getElementById('player');
								msc.play();
								break;
							case "pause":
								var msc = document.getElementById('player');
								msc.pause();
								break;
							case "stop":
								var msc = document.getElementById('player');
								msc.load();
								break;
						}
						break;
				// CD
					case "cd":
						if (input.indexOf(".") == -1) {
							var folderFound = 0;
							this.Folder_Active.forEach(item => {
								if (inputSplit[1] == item.toLowerCase()) {
									this.session.dirLast.push(this.session.dirCur);
									this.session.dirCur = inputSplit[1];
									folderFound = 1;
									this.UpdateOutput("");
								}
							});
							if (folderFound == 0) {
								this.UpdateOutput("Folder not found.<");
							}
						}
						else if ((inputSplit[1] == "..") && (this.session.dirCur != "home")) {
							this.session.dirCur = this.session.dirLast[this.session.dirLast.length - 1]
							this.session.dirLast.pop()
							this.UpdateOutput("");
						}
						else {
							this.UpdateOutput("Folder not found.<");
						}
						break;
				// LS
					case "ls":
						this.UpdateOutputList(this.Folder_Active);
						break;
				// OPEN
					case "open":
						if (input.indexOf(".") != -1) {
							var itemFound = 0;
							this.Folder_Active.forEach(item => {
								if (inputSplit[1] == item.toLowerCase()) {
									this.OpenItem(inputSplit[1]);
									itemFound = 1;
									this.UpdateOutput("");
								}
							});
							if (itemFound == 0) {
								this.UpdateOutput("Item not found.<");
							}
						}
						else {
							this.UpdateOutput("Item not found.<");
						}
						break;
				// CLOSE
					case "close":
						this.Close();
						break;
				// LOGIN
					case "login":
						$("#frmLogin").show();
						$("#logUser").focus();
						break;
				// CHAT
					case "chat":
						OpenChat();
						break;
				// DEFAULT
					default:
						this.UpdateOutput("");
						break;
				}
			},
			UpdateOutput: function(value) {
				var output = document.getElementById("outputConsoleText").value;
				varSplit = value.split("<");
				varSplit.forEach(string => { output = output + "\n" + string; });
				document.getElementById("outputConsoleText").value = output;
			},
			UpdateOutputList: function(list) {
				var output = document.getElementById("outputConsoleText").value;
				list.forEach(item => { output = output + "\n    - " + item; });
				document.getElementById("outputConsoleText").value = output + "\n";
			},
			ClearOutput: function() {
				document.getElementById("outputConsoleText").value = "";
			},
			OpenItem: function(item) {
				alert(item);
			},
			Close: function() {
				$('canvas').hide();
				$('img').hide();
				$('center').hide();
			}
		},
		computed: {
			Folder_Active: function() {
				var activeItems = ['']
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
	
// Spectrum Color Picker Functions
	$("#bodyColorSelector").spectrum({
		preferredFormat: "hex3",
		color: "#2f3d4a",
		showInitial: true,
		showInput: true,
		change: function(color) {
			document.body.style.backgroundColor = color.toHexString();
		}
	});
	$("#outputColorSelector").spectrum({
		preferredFormat: "hex3",
		color: "#303030",
		showInitial: true,
		showInput: true,
		change: function(color) {
			document.getElementById('outputConsoleText').style.backgroundColor = color.toHexString();
		}
	});
	$("#inputColorSelector").spectrum({
		preferredFormat: "hex3",
		color: "#303030",
		showInitial: true,
		showInput: true,
		change: function(color) {
			document.getElementById('inputConsoleText').style.backgroundColor = color.toHexString();
		}
	});