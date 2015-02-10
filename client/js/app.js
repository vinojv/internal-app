angular.module("rbook", [
     "ui.router",
     "restangular",
     "angularFileUpload"
     ])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        'RestangularProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {
            console.log("config");

            RestangularProvider.setBaseUrl('/rest/');
            RestangularProvider.setDefaultHeaders({
                "Content-Type": "application/json"
            });

            $urlRouterProvider.when("/", "/");

            $locationProvider.html5Mode(true);

            $stateProvider
                .state("login", {
                    url: "/",
                    templateUrl: "/html/login.html",
                    controller: "LoginController as Login"
                })

            .state("employee-details", {
                url: "/employee-details",
                templateUrl: "/html/employee-details.html",
                controller: "EmployeeListController as empCtr",
                resolve: {
                    employees: ["Service", function (service) {
                        return service.getEmployees().then(function (data) {
                            return data;
                        }, function (err) {
                            console.log("error")
                            return []
                        });
                    }]

                }
            })

            .state("employee", {
                url: "/employee/{mode}",
                templateUrl: "/html/add-employee.html",
                controller: "AddEmployeeController as forms"
            });

    }])
    .run(["$state",
          "Restangular",
          function($state, Restangular){
        Restangular.setErrorInterceptor(function (response, deferred, responseHandler) {
                console.log("Restangular error intercepted", response);

                if (response.status == 403) {
                    $state.go('login');
                    return false; //error handled
                }

                return true; // error not handled
            });
    }])
    .controller("RBookController", [
      "$scope",
      "$state",
      function (scope, $state) {
            $state.go("employee-details");
//            $state.go("employee");

      }])
