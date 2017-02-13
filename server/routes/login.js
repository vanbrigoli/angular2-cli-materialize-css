module.exports = function(app, passport) {
    app.get('/getUser', isLoggedIn, function(req, res) {
        res.json({ user: req.user });
    });

    app.post('/authenticate', passport.authenticate('local-login'), function (req, res) {
    	res.json({ authenticated: true });
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.status(200).send({ success: true });
    });

    // route middleware to make sure a user is logged in
    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/');
    }
}