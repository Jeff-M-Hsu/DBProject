var jeffSite = angular.module('jeffSite', []);

function mainController($scope, $http){

	$scope.login = function(){
		var user = $.param({
			username: $scope.formUsername,
			password: $scope.formPassword
		});
		var config = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
    	    }
		}
		$http.post('/user', user, config)
			.success((user) => {
				var form = document.getElementById("login");
				var referenceNode = document.getElementById("dark-mode");
				var parentDiv = referenceNode.parentNode;
				hideElement(form);
				var newNode = document.createElement("span");
				newNode.style.padding = "5px 10px 0px 5px";
				newNode.style.float = "right";
				newNode.appendChild(document.createTextNode("Welcome, user"));
				parentDiv.insertBefore(newNode, referenceNode);
			})
			.error((user) => {
				console.log('Error: ' + user);
			});
	};
}

function toggleDarkMode(){
	var body = document.getElementById("body");
	var image = document.getElementById("icon");
	var button = document.getElementById("dark-mode");
	var title = document.getElementById("title");
	var buttonContainer = document.getElementById("tabHeaders");
	var mode = body.className;
	var header = document.getElementById("header");
	var topbar = document.getElementById("topbar");
	//if mode==dark-mode then set to light-mode else set to dark-mode
	if(mode=="dark-mode"){
		body.className = "light-mode";
		button.className = "mini ui secondary basic button";
		title.className = "ui center aligned huge header";
		header.style.backgroundColor = "#CCC";
		image.src = "./resources/Dark-Mode.png";
		buttonContainer.className = "four ui buttons"
		topbar.style.backgroundColor = "#CCC";

	}
	else{
		body.className = "dark-mode";
		button.className = "mini ui inverted secondary basic button"
		title.className = "ui center aligned huge inverted header";
		header.style.backgroundColor = "#111";
		image.src = "./resources/Light-Mode.png";
		buttonContainer.className = "four ui secondary buttons"
		topbar.style.backgroundColor = "#111";

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

function hideElement(element){
	element.style.display="none";
}