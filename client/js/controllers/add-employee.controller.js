angular.module("rbook")
    .controller('AddEmployeeController', [
        'Service',
         function(Service){
         self.service = Service;
         console.log("forms controller")
        self.upload = function (files) {
            console.log("files")
//            console.log(files)

//            if (self['uploadForm'].file)
//                self['uploadForm'].submit();

        }

    }])
