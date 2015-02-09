var passport = require('passport');

module.exports = function (app, router) {

    return function () {

        var route = '/auth';
        var User = app.models.User;
        var Company = app.models.Company;

        router

        .post(route + '/signup', function (req, res) {

            User.findOne({ username: req.body.username }).exec()
            .then(function (user) {
                // if user already exists then throw error
                if (user) {
                    throw 'Username not available, please try with another username';
                }
                console.log(req.body)
                // else create a new user
                return User.create({ username: req.body.username, password: req.body.password, type: req.body.type | 'default' });
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

        .post(
            route + '/login',
            passport.authenticate('local'),
            function (req, res) {
                res.json({ username: req.user.username, _id: req.user._id });
            }
        )

        .get(route + '/logout', function (req, res) {
            req.logout();
            res.send('Logged out successfully');
        })

        return router;

    };

};
