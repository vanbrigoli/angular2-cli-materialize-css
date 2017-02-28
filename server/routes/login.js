module.exports = function(app, passport) {
    // get user
    app.get('/getUser', isLoggedIn, function(req, res) {
        res.json({ user: req.user });
    });

    app.post('/authenticate', passport.authenticate('local-login'), function (req, res) {
    	res.status(200).send({ success: true });
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.status(200).send({ success: true });
    });

    // =====================================
    // FACEBOOK ROUTES =====================
    // =====================================
    // route for facebook authentication and login
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', { failureRedirect: '/login' }), function(req, res) {
            res.redirect('/');
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