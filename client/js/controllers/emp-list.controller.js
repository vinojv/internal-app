angular.module("rbook")
    .controller("EmployeeListController", [
    'employees',
    'Service',
    '$state',
    function(employees, Service, $state){

        var self = this;
        self.employees = employees;

        self.editEmployee = function (employee){
            Service.update = true;
            Service.formData = employee;
        }

        self.addNew = function (mode){
            $state.go("employee", { mode: mode })
        }

    }])
