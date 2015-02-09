angular.module("rbook")
    .service("Service", ["Restangular", function(Restangular){

    var self = this;

    self.checkCred = function (loginData){

        if (loginData.username && loginData.password)
            return Restangular.one("auth/login").customPOST(loginData);
        else
            return;
    };
    self.getEmployees = function (){
        return Restangular.one("employees").getList();
    }

}])
