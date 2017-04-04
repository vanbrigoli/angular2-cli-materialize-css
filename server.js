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
const lusca = require('lusca');

// load database config
const configDB = require('./config/database.js');

// load Setup
const setup = require('./config/setup.js');

// Get our API routes
const api = require('./server/routes/api.js');

const app = express();

// connect to our database
mongoose.connect(process.env.MONGODB_URI || configDB.url);

// save admin user at start
setup.setAdmin();

require('./config/passport')(passport);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev')); // log api calls
app.use(session({
	secret: 'bogoaccrefied7',
	resave: true,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
// Setup node security
app.use(lusca({
    csrf: {angular: true},
    xframe: 'SAMEORIGIN',
    p3p: 'ABCDEF',
    hsts: {maxAge: 31536000, includeSubDomains: true, preload: true},
    xssProtection: true,
    nosniff: true
}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

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