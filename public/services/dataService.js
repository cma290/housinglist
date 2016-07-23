
app.service('dataService', function($http, $routeParams){
	this.getList = function($scope){
		return $http.get('public/apartment.json').then(function(res){
			var list = res.data.apartments;
			$scope.list = list;
			$scope.numOfApts = list.length;
			$scope.selectedApt = $scope.list[$routeParams.aptId];
		});
	};

	this.getById = function(id){

	}
});