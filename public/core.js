var jeffSite = angular.module('jeffSite', []);

function mainController($scope, $http){
}

function toggleDarkMode(){
	var body = document.getElementById("body");
	var image = document.getElementById("icon");
	var button = document.getElementById("dark-mode");
	var title = document.getElementById("title");
	var buttonContainer = document.getElementById("tabHeaders");
	var mode = body.className;
	var header = document.getElementById("header");
	//if mode==dark-mode then set to light-mode else set to dark-mode
	if(mode=="dark-mode"){
		body.className = "light-mode";
		button.className = "mini ui secondary basic button";
		title.className = "ui center aligned huge header";
		header.style.backgroundColor = "#CCC";
		image.src = "./resources/Dark-Mode.png";
		buttonContainer.className = "four ui buttons"
	}
	else{
		body.className = "dark-mode";
		button.className = "mini ui inverted secondary basic button"
		title.className = "ui center aligned huge inverted header";
		header.style.backgroundColor = "#111";
		image.src = "./resources/Light-Mode.png";
		buttonContainer.className = "four ui secondary buttons"


	}
}

function switchTab(name,element){
	var tabContent = document.getElementsByClassName("tabcontent");
	var tabButtons = document.getElementsByClassName("ui active button");
	for(let i = 0; i < tabContent.length; i++){
		tabContent[i].style.display = "none";
	}
	for(let i = 0; i < tabButtons.length; i++){
		tabButtons[i].className = "ui button";
	}
	document.getElementById(name).style.display = "block";
	element.className = "ui active button";
}

function loginTry(){
	var account = document.getElementById("login");
	console.log(
		"username is " + account.getElementsByTagName('input')[0].value +"\n"+
		"password is " + account.getElementsByTagName('input')[1].value
	)
}