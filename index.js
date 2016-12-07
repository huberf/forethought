var logger = require('./tools/logger.js');

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const session = require('express-session')({
  secret: 't0b3ch4ng3d',
  resave: true,
  saveUninitialized: true,
});
// Setting up the port to listen to
app.set('port', (process.env.PORT || 5000));

// Setting up the resource directory
app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setting up cookie use
app.use(cookieParser());

// Setting up session handling
var sharedsession = require('express-socket.io-session');
app.use(session);
io.use(sharedsession(session));

http.listen(app.get('port'), function() {
  logger.info('Forethought is up and running!', {port: app.get('port')});
});
