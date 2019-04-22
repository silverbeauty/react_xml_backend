let http = require("http");  //1
let url = require("url");  //2
let express = require("express");
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { ENV_PATH } = require('./config/path')
require('dotenv').config({ path: ENV_PATH })

let indexRouter = require('./routes/index.js');

let app = express();

app.use(cors())
app.use(logger('dev'))
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({ extended: false, limit: '50mb' }))
app.use(cookieParser())

app.use('/api', indexRouter)

module.exports = app