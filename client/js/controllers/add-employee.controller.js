angular.module("rbook")
    .controller('AddEmployeeController', [
        'Service',
        '$upload',
         function (Service, $upload) {
            var self = this;
            self.service = Service;
            console.log("forms controller")

            self.upload = function () {
                console.log(self.avatar);
                 $upload.upload({
                    url: "/rest/uploads",
                    file: self.avatar, // or list of files ($files) for html5 only
                }).progress(function (evt) {
                    console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
                }).success(function (data, status, headers, config) {
                     console.log(data);
                     Service.formData.photo = data.filename;
                 }).error(function (err){
                    console.log(err);
                 });
            }


    }]);
