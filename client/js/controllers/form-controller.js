angular.module("rbook")
    .controller('AddEmployeeController', [
        'Service',
         function(Service){
         self.service = Service;
        self.upload = function (files) {
            console.log(files)

//            if (self['uploadForm'].file)
//                self['uploadForm'].submit();

        }

    }])
