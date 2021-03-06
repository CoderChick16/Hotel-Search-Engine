var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');
var search = require('./routes/search');
var mongoose= require('mongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/search', search);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//connect mongo
var MongoClient = require('mongodb').MongoClient;

// Connect to the db

                 MongoClient.connect("mongodb://localhost:27017/Stayzone", function (err, db) {
                 if (err) throw err;
                 var query = { city : "Jhansi" };
                 db.collection("property").find(query).toArray(function(err, result) {
                     if (err) throw err;
                    // console.log(result);
                     db.close();

        });
        
    });
                


////////////////////////////////



/////////////////////
module.exports = app;
app.listen(85);