angular.module("rbook")
    .service("Service", [
    "Restangular",
    "$localStorage",
    function(Restangular, $localStorage){

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

    self.postDetails = function (id){
        if (self.formData._id)
            return Restangular.one("employees", self.formData._id)
                .customPUT(self.formData);

        return Restangular.one("employees").customPOST(self.formData);
    }

}])
