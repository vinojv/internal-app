angular.module("rbook")
    .controller('AddEmployeeController', [
        'Service',
         function(Service){
         var self = this;
		 self.service = Service;
		 console.log("forms controller");
        self.upload = function (files) {
            console.log("files")
//            console.log(files)

//            if (self['uploadForm'].file)
//                self['uploadForm'].submit();

        }
		
		self.addDetails = function() {
			console.log("designation",Service.formData);
			
			Service.postDetails().then(function (data) {
				console.log(data);
			})
		}

    }])
