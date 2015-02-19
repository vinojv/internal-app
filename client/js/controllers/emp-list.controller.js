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
        self.avatar = '';
        self.document = '';
        self.close = function(){
            self.avatar = '';
            self.document = '';
        }
//        if ($localStorage.userdata && $localStorage.userdata.type)
//            self.type = $localStorage.userdata.type.toUpperCase;

        self.editEmployee = function (employee){
            Service.update = true;
            Service.formData = employee;
            $state.go("employee", { mode: "edit" })
        }

        self.addNew = function (mode){
			Service.formData = {
                name : '',
                email : '',
                designation :'',
                exprience : 0,
                photo : '',
                expertice :'',
                project :'',
                resume :''
            }
            $state.go("employee", { mode: mode })
        }

    }])
