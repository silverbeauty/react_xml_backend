const File = require('../models/file')
const urls = require('../constants/urls')

const create = async (req, res) => {
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

module.exports = {
    create,
}