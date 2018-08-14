var jeffObj1 = angular.module('jeffObj1', []);

function mainController($scope, $http){
	$scope.formData = {};
	//get all object1s and show upon landing
	$http.get('/api/object1s')
	.success(function(data){
		$scope.object1s = data;
		console.log(data);
	})
	.error(function(data){
		console.log('Error: ' + data);
	});

	//send text to node api when submitting add form
	$scope.createObject1 = function(){
		$http.post('/api/object1s', $scope.formData)
		.success(function(data){
			//clear form so user can enter another
			$scope.formData = {};
			$scope.object1s = data;
			console.log(data);
		})
		.error(function(data){
			console.log(data);
		});
	};

	//delete an object1 after checking it
	$scope.deleteObject1 = function(id){
		$http.delete('/api/object1s' + id)
		.success(function(data){
			$scope.object1s = data;
			console.log(data);
		})
		.error(function(data){
			console.log('Error: ' + data)
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
	//if mode==dark-mode then set to light-mode else set to dark-mode
	if(mode=="dark-mode"){
		body.className = "light-mode";
		button.className = "ui secondary basic button";
		title.className = "ui center aligned huge header";
		header.style.backgroundColor = "#CCC";
		image.src = "./resources/Dark-Mode.png";
		buttonContainer.className = "four ui buttons"
	}
	else{
		body.className = "dark-mode";
		button.className = "ui inverted secondary basic button"
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