angular.module("rbook")
    .controller("EmployeeListController", ['employees', function(employees){

        var self = this;
        self.employees = employees;

    }])
