const express = require('express')

const XPathCtrl = require('../controllers/xpath')
const { catchError } = require('../controllers/error')

const router = express.Router()

// Get Xpath in a file

router.get('/', catchError(XPathCtrl.get))

module.exports = router