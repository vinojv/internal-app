angular.module("rbook")
    .controller("EmployeeListController", [
    'employees',
    'Service',
    function(employees, Service){

        var self = this;
        self.employees = employees;
        self.editEmployee = function (employee){
            Service.update = true;
            Service.formData = employee;
        }

    }])
