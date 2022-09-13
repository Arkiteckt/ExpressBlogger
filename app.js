//This block is where we require in the node_module libraries needed to run express
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Important: This is where we require in the routers for our express app
// var indexRouter = require('./routes/index') is bringing the router variable into the current file as the variable index router
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//Requiring the blogs.js router
var blogsRouter = require('./routes/blogs');

//This block is initializing express for us
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//This block is the middleware functions for express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Important: This block is where we invoke the router we create.
//The app.use method will take the routes we define in our routers and include them in our server when we run it
// app.use('/', indexRouter); is importing the routes we define on indexRouter into our server so that they are exposed as routes
// -The first argument is the base path for this router
// -The second argument is the router variable
// - ANy other routes in our variable 
// -If you create a new js file it goes here
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Include blogs router in server routes
app.use('/blogs', blogsRouter);

// This code is for creating 404 error pages when the URl in the request doesn't match the file
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


//This block is for catching and handling errors
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// This code exports the app file
module.exports = app;
