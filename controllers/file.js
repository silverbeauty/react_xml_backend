const path = require('path')
const mime = require('mime-types')
const fs = require('fs')

const File = require('../models/file')

const create = async (req, res) => {
    if (req.file) {
        if (req.currentUser) {
            const file = new File({
                user: req.currentUser.id,
                name: req.file.filename,
                type: 'image'
            })
            await file.save()
        }
        res.send({
          status: true,
          data: {
            file_name: req.file.filename,
            url: process.env.VIZYUL_DOMAIN + '/api/file/' + req.file.filename
          }
        })
    }
}

module.exports = {
    create,
}