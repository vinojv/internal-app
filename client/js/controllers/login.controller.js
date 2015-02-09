angular.module("rbook")
    .controller("LoginController", [
    "Service",
    "$state",
    function (service, $state) {
            console.log("login controller");
            var self = this;
            self.credentials = {
                username: 'admin@razorthink.com',
                password: 'admin'
            }

            self.submit = function () {

                if (self.credentials.username && self.credentials.password)
                    service.checkCred(self.credentials).then(function () {

                        console.log("logged in successfully");
                        $state.go("employee-details");

                    }, function (err) {

                        console.log("error", err);

                    })
            }
}]);
