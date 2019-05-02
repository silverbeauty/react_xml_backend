const express = require('express')
const uuidv1 = require('uuid/v1')
const mime = require('mime-types')

const FileCtrl = require('../controllers/file')
const { catchError } = require('../controllers/error')
const { FILES_PATH } = require('../config/path')

const multer = require('multer')

const router = express.Router()

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, FILES_PATH)
  },
  filename: (req, file, cb) => {
    cb(null,  file.originalname)
  }
})


const upload = multer({ storage: fileStorage })


// Upload a file
router.post('/', upload.single('file'), catchError(FileCtrl.create))

// Display all file

router.get('/', catchError(FileCtrl.getAll))

// Get Xpath in a file

router.get('/:id', catchError(FileCtrl.getXpath))

module.exports = router
