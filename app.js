var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var bookRouter = require('./routes/book');
var libcardRouter = require('./routes/libcard');
var recordRouter = require('./routes/record');
var userRouter = require('./routes/user');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var authRouter = require('./routes/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'TEMP_SECRET',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 30 }
}));

app.use(cookieParser('TEMP_SECRET'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3001');
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
  res.header('Access-Control-Allow-Headers', 'x-requested-with,content-type');
  next();
});

app.use('/', indexRouter);
app.use('/book', bookRouter);
app.use('/libcard', libcardRouter);
app.use('/record', recordRouter);
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/check', authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
