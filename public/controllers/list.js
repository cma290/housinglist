
app.controller('listCtrl', function($scope, dataService, $routeParams) {
	dataService.getList($scope);

	//default sorting. popularity hight to low
	$scope.myOrderBy = "popularity"; 
	$scope.reverse = true;
	
	$scope.popuUp = "none";
	$scope.popuDown = "inline";
	$scope.priUp = "none";
	$scope.priDown = "none";
	
	// var updateArrow = function(){
	// 	//if (document.getElementById("popuUp")!== null) document.getElementById("popuUp").style.display = popuUp;
	// 	if (document.getElementById("popuDown") !== null) document.getElementById("popuDown").style.display = popuDown;
	// 	if (document.getElementById("priUp")  !== null) document.getElementById("priUp").style.display = priUp;
	// 	if (document.getElementById("priDown") !== null) document.getElementById("priDown").style.display = priDown;
	// };

	//sort by popularity/price
	$scope.updateOrder = function(input){
		if (input === $scope.myOrderBy) {
			$scope.popuUp = input === "popularity" ? ($scope.reverse ? "inline" : "none"):("none");
			$scope.popuDown = input === "popularity" ? ($scope.reverse ? "none" : "inline"):("none");
			$scope.priUp = input === "price" ? ($scope.reverse ? "inline" : "none"):("none");
			$scope.priDown = input === "price" ? ($scope.reverse ? "none" : "inline"):("none");
			
			$scope.reverse = !$scope.reverse;
		} else {
			$scope.myOrderBy = input;
			//when first time switch to price, order from price low to high
			if(input === "price") {
				$scope.reverse = false;
				$scope.priUp = "inline";
				$scope.popuUp = $scope.popuDown = "none";
			} else {
				$scope.reverse = true;
				$scope.popuDown = "inline";
				$scope.priUp = $scope.priDown = "none";
			}
		}
	};

	//on-page-change, go top
	// $scope.goTop = function(newpage, oldpage){
	// 	window.location.href = "#top"; //doing so breaks the current pagination directive
	// };
	//for detail page
	$scope.back = function(){
		window.history.back();
	};
});	