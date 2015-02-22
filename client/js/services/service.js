/**
*   Service for rbook
**/

angular.module("rbook")
    .service("Service", [
    "Restangular",
    "$localStorage",
    "$state",
    function(Restangular, $localStorage, $state){

    var self = this;
    self.data ={ };

    if ($localStorage.userData && $localStorage.userData.type)
        self.type = $localStorage.userData.type.toUpperCase();

    self.checkCred = function (loginData){

        if (loginData.username && loginData.password)
            return Restangular.one("auth/login").customPOST(loginData);
        else
            return;
    };

    self.getEmployees = function (){
        return Restangular.one("employees").getList();
    };

    self.update = false;

    self.logout = function(){
        Restangular.one("auth/logout").get()
            .then(function(){
                $state.go("login");
            }, function(err) {
                console.log(err);
            })
    };

/**
*   post/put employee details
**/

    self.postDetails = function (id){
        if (self.formData._id)
            return Restangular.one("employees", self.formData._id)
                .customPUT(self.formData);

        return Restangular.one("employees").customPOST(self.formData);
    }

}])
