const File = require('../models/file')
const urls = require('../constants/urls')
const xpath = require('xpath')
const dom = require('xmldom').DOMParser
const { FILES_PATH } = require('../config/path')

const create = async (req, res) => {
    console.log('FILES_PATH', FILES_PATH)
    if (req.file) {   
        const file = new File({
            name: req.file.filename,
            type: 'image'
        })
        await file.save()
        return res.send({
            status: true,
            data: {
                file_name: req.file.filename,
                url: urls.FILE_URL + req.file.filename
            }
        })
    }else{
        res.status(500).send({
            status: false,
            error: 'Internal_server_error'
        })
    }
}

const getAll = async (req, res) => {
    const data = await File.find({});

    if (!data) {
        return res.status(401).json({
          status: false,
          error: 'File doesn`t exist'
        })
      }
    
      res.send({
        status: true,
        data
      })
}

module.exports = {
    create,
    getAll,
}