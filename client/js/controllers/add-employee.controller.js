angular.module("rbook")
    .controller('AddEmployeeController', [
        'Service',
        '$upload',
        '$state',
         function (Service, $upload, $state) {
            var self = this;
            self.service = Service;
            self.disabled = false;
            if (!Service.formData || !Service.formData._id){
                Service.formData = {
                    name: '',
                    designation: '',
                    exprience: 0,
                    photo: '',
                    expertice:''
                }
            }

            self.upload = function () {
                console.log(self.avatar);
                 $upload.upload({
                    url: "/rest/uploads",
                    file: self.avatar, // or list of files ($files) for html5 only
                }).progress(function (evt) {
                    self.disabled = true;
                    console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
                }).success(function (data, status, headers, config) {
                     console.log(data);
                     Service.formData.photo = data.filename;
                 }).error(function (err){
                    console.log(err);
                 }).finally(function(){
                    self.disabled = false;
                 });
            }


            self.addDetails = function() {
                console.log("designation",Service.formData);
                self.disabled = true;
                Service.postDetails().then(function (data) {
                    console.log(data);
                    $state.go('employees');
                }).finally(function(){
                    self.disabled = false;
                });
            }
        }


    ]);
