const express = require('express')

const user = require('./user')
const file = require('./file')
const xpath = require('./xpath')
const UserCtrl = require('../controllers/user')

const router = express.Router()

router.get('/health', (req, res) => {
    res.send('OK')
  })

// User Dashboard api
router.use('/user', user)
router.use('/file', file)
router.use('/xpath', xpath)
module.exports = router