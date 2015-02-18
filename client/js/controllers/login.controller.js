angular.module("rbook")
    .controller("LoginController", [
    "Service",
    "$state",
    "$localStorage",
    "$timeout",
    function (service, $state, $localStorage, $timeout) {
            console.log("login controller");
            var self = this;
            self.invalidCred = false;

            self.credentials = {
                username: '',
                password: ''
            }

            self.invalid = function(){
                self.invalidCred = true;
                $timeout( function (){
                    self.invalidCred = false;
                }, 1000);
            };

            self.submit = function () {

                if (self.credentials.username && self.credentials.password)
                    service.checkCred(self.credentials).then(function (data) {
                        $localStorage.userData = data;
                        console.log(data);
                        if ($localStorage.userData && $localStorage.userData.type)
                            service.type = $localStorage.userData.type.toUpperCase();
                        console.log("logged in successfully");
                        $state.go("employees");

                    }, function (err) {

                        self.invalid();
                        console.log("error", err);

                    });
                else
                    self.invalid();

            }
}]);
