const express = require('express')

const { body, query } = require('express-validator/check')

const UserCtrl = require('../controllers/user')
const { catchError } = require('../controllers/error')

const router = express.Router()


module.exports = router
