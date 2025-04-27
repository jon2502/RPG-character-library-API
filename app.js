var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

var indexRouter = require('./routes/index');

var app = express();

app.use(helmet());
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Start db connection
mongoose.connect(process.env.MONGODB_URI, {dbName: process.env.MONGODB_NAME});
const db = mongoose.connection;
db.on('error', function (error) { console.error(error); });
db.once('open', function () { console.log('Connected to database'); });

app.use('/', indexRouter);

module.exports = app;
