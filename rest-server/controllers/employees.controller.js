var passport = require('passport');
var ensureAuthenticated = require('../utils').ensureAuthenticated;
var sendDbResponse = require('../utils').sendDbResponse;

/* TODO: A user must be able to see and manipulate only the company related to him */

module.exports = function (app, router) {

    return function () {

        var route = '/employees';
        var Employees = app.models.Employees;
        var Agent = app.models.Agent;

        // set up the router
        router

        .use(ensureAuthenticated)

        .get(route, function (req, res) {
            Employees.find(sendDbResponse(req, res));
        })

        .get(route + '/:id', function (req, res) {
            Employees.findById(req.params.id, sendDbResponse(req, res));
        })

        .post(route, function (req, res) {

            Employees.findOne({ email: req.body.email }).exec()
            .then(function (Employee) {
                // if Employee already exists then throw error
                if (Employee) {
                    throw 'Employee exist with the same email id';
                }

                console.log("employee",Employee);

                return Employees.create({
                    name: req.body.name,
                    email: req.body.email,
                    designation: req.body.designation,
                    exprience: req.body.exprience,
                    project: req.body.project,
                    resume: req.body.resume,
                    reportingTo: req.body.reportingTo,
                    photo: req.body.photo,
                    expertice:req.body.expertice }, sendDbResponse(req, res));
            })
            .then(
                function (user) {
                    res.json({ username: user.username, id: user._id });
                },
                function (err) {
                    res.send(err);
                }
            );
        })

        .put(route, function (req, res) {
            Employees.create({
                    name: req.body.name,
                    email: req.body.email,
                    designation: req.body.designation,
                    exprience: req.body.exprience,
                    photo: req.body.photo,
                    project: req.body.project,
                    reportingTo: req.body.reportingTo,
                    resume: req.body.resume,
                    expertice:req.body.expertice }, sendDbResponse(req, res));
        })

        .put(route + '/:id', function (req, res) {
            var putObj = { };
            console.log("update", req.params.id);
            if(req.body._id)
                delete req.body._id;
            Employees.findByIdAndUpdate(
                req.params.id, req.body,
                sendDbResponse(req, res)
            );
        })

        .delete(route + '/:id', function (req, res) {
            Employees.findByIdAndRemove(req.params.id, sendDbResponse(req, res));
        })

        return router;

    };

};
