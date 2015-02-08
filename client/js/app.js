angular.module("rbook", [
     "ui.router",
     "restangular",
     "ngCookies",
     "ngAnimate",
     "ngStorage",
     "angularFileUpload",
     ]);

angular.module("blazent")
	.config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        'RestangularProvider',

        function ($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {
			RestangularProvider.setBaseUrl('/');
			RestangularProvider.setDefaultHeaders({
				"Content-Type": "application/json"
			});

			$urlRouterProvider.when("/", "/");
//			$urlRouterProvider.otherwise("/invalidURL");
			$locationProvider.html5Mode(true);

			$stateProvider
				.state("login", {
					url: "/",
					templateUrl: "login.html",
					controller: "LoginController as Login"
				})

			.state("employee-details", {
				url: "/employee-details",
				templateUrl: "/employee-details.html"
			})

			.state("employee", {
				url: "/employee/{mode}",
				templateUrl: "/add-employee.html"
			});
		}]);

angular.module("rbook", ["restangular"])
	.controller("RBookController", ["$scope",
		function (scope) {
			scope.credentials = {
				username: '',
				password: ''
			}
}])