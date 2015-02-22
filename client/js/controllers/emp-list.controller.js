angular.module("rbook")
    .controller("EmployeeListController", [
    'employees',
    'Service',
    '$state',
    '$localStorage',
    '$document',
    '$rootScope',
    function(employees, Service, $state, $localStorage, document, $rootScope){

        var self = this;
        self.employees = employees;
        self.Service = Service;
        self.avatar = '';
        self.document = '';
        self.close = function(){
            self.avatar = '';
            self.document = '';
        }

        document.bind("keydown keypress", function (event) {
            if (event.which === 27) {
                $rootScope.$apply(function () {
                    self.close();
                });
                event.preventDefault();
            }
        });
/**
*       edit the employees
**/
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
                reportingTo :'',
                project :'',
                resume :''
            }
            $state.go("employee", { mode: mode })
        }

    }])
