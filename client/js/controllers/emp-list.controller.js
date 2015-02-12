angular.module("rbook")
    .controller("EmployeeListController", [
    'employees',
    'Service',
    '$state',
    '$localStorage',
    function(employees, Service, $state, $localStorage){

        var self = this;
        self.employees = employees;
        if ($localStorage.userdata && $localStorage.userdata.type)
            self.type = $localStorage.userdata.type.toUpperCase;

        self.editEmployee = function (employee){
            Service.update = true;
            Service.formData = employee;
        }

        self.addNew = function (mode){
            $state.go("employee", { mode: mode })
        }

    }])
