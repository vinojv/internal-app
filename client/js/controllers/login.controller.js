angular.module("rbook")
    .controller("LoginController", [
    "Service",
    "$state",
    "$localStorage",
    function (service, $state, $localStorage) {
            console.log("login controller");
            var self = this;

            self.credentials = {
                username: 'admin@razorthink.com',
                password: 'admin'
            }

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

                        console.log("error", err);

                    })
            }
}]);
