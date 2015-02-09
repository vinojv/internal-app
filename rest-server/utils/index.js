
// middleware to check if request is authenticated using passport
exports.ensureAuthenticated = function (req, res, next) {
    console.log(req.isAuthenticated());
    req.isAuthenticated() ? next() : res.status(403).send({status:403, message: 'Request Not Authenticated'});
};

// common read-response from mongoose.
exports.sendDbResponse = function (req, res) {
    return function (err, data) {
        if (err) return res.send(err);
        else res.send(data);
    };
};
