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