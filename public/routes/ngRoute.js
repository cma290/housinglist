var app = angular.module("myApp", ['ngRoute', 'angularUtils.directives.dirPagination']);

app.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'public/views/list.html',
			controller: 'listCtrl'
		})
		.when('/list', {
			templateUrl: 'public/views/list.html',
			controller: 'listCtrl'
		})
		.when('/details/:aptId', {
			templateUrl: 'public/views/details.html',
			controller: 'listCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
	}]
	);