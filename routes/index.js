const express = require('express')

const user = require('./user')
const file = require('./file')
const UserCtrl = require('../controllers/user')

const router = express.Router()

router.get('/health', (req, res) => {
    res.send('OK')
  })

// User Dashboard api
router.use('/user', user)
router.use('/file', file)
module.exports = router