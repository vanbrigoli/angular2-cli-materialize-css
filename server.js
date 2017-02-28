// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const morgan  = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');

// load database config
const configDB = require('./config/database.js');

// load up the user model
var User = require('./server/models/users');

// Get our API routes
const api = require('./server/routes/api.js');

const app = express();

// connect to our database
mongoose.connect(configDB.url);

// save admin user at start
User.findOne({ 'local.username' :  'admin' }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                console.error('Error', err);

            // if no user is found
            if (!user){
              var adminUser = new User();

              adminUser.local.username = 'admin';
              adminUser.local.password = adminUser.generateHash('admin');
              adminUser.local.admin    = true;

              adminUser.save(function(err) {
                        if (err)
                            throw err;

                        // if successful, return the new user
                        return;
                    });
            }
        return;
        });

require('./config/passport')(passport);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


// Set our api routes
require('./server/routes/login.js')(app, passport);
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));