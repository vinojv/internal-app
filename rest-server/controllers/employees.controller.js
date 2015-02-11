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
            Employees.create({
                name: req.body.name,
                designation: req.body.designation,
                exprience: req.body.exprience,
                photo: req.body.photo,
                expertice:req.body.expertice }, sendDbResponse(req, res));
        })

        .put(route, function (req, res) {
            Employees.create({ name: req.body.name,
                    designation: req.body.designation,
                    exprience: req.body.exprience,
                    photo: req.body.photo,
                    expertice:req.body.expertice }, sendDbResponse(req, res));
        })

        .put(route + '/:id', function (req, res) {
            var putObj = { };

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
