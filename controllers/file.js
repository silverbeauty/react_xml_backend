const File = require('../models/file')
const urls = require('../constants/urls')

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
            url: urls.FILE_URL + req.file.filename
          }
        })
    }
}

module.exports = {
    create,
}