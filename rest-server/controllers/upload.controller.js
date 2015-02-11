var multer = require('multer');
var passport = require('passport');
var ensureAuthenticated = require('../utils').ensureAuthenticated;
var sendDbResponse = require('../utils').sendDbResponse;
var done = false;
var fileName;
/* TODO: A user must be able to see and manipulate only the company related to him */

module.exports = function (app, router) {

    return function () {

        var route = '/uploads';
        // set up the router
        router
          .use(multer({ dest: '/home/vinoj/GitHub/internal-app/client/uploads',
               rename: function (fieldname, filename) {
                  fileName = Date.now();
                  return fileName;
                },
               onFileUploadStart: function (file) {
                  console.log(file.originalname + ' is starting ...')
                },
               onFileUploadComplete: function (file) {
                  console.log(file.fieldname + ' uploaded to  ' + file.path)
                  done=true;
                }
          }))

//          .get(route, function(req,res){
//                res.sendFile("/home/vinoj/GitHub/internal-app/rest-server/index.html");
//          })

          .post(route, function(req, res){
            if(done==true){
              console.log(req.files.file.extension);
              res.send({
                status: true,
                filename: "/uploads/" + fileName + "." + req.files.file.extension,
                message: "File uploaded."
              });
            } else res.send({
                status: false,
                filename: '',
                message: "failed to upload."
              });
          })

        return router;

    };

};
