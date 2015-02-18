angular.module("rbook")
    .controller("EmployeeListController", [
    'employees',
    'Service',
    '$state',
    '$localStorage',
    function(employees, Service, $state, $localStorage){

        var self = this;
        self.employees = employees;
        self.Service = Service;
//        if ($localStorage.userdata && $localStorage.userdata.type)
//            self.type = $localStorage.userdata.type.toUpperCase;

        self.editEmployee = function (employee){
            Service.update = true;
            Service.formData = employee;
            $state.go("employee", { mode: "edit" })
        }

        self.addNew = function (mode){
			Service.formData.name: '';
			Service.formData.email: '';
			Service.formData.designation:'';
			Service.formData.exprience 0;
			Service.formData.photo: '';
			Service.formData.expertice:'';
//            Service.formData.project:'';
//			Service.formData.resume:'';
            $state.go("employee", { mode: mode })
        }

    }])
