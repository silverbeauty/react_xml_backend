const fs = require('fs')
const path = require('path')
const xpathes = require('xpath')
const dom = require('xmldom').DOMParser
const File = require('../models/file')
const { FILES_PATH } = require('../config/path')

const get = async (req, res) => {
    const { file, xpath } = req.query
    const _file = await File.findOne({_id: file});
    console.log('_file', _file)
    const filePath = path.join(FILES_PATH, _file.name);
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err, _res){
        if (!err) {
            let xml = _res;
            let doc = new dom().parseFromString(xml)
            let data = xpathes.select(xpath , doc)
            console.log('data', data)
            res.send({
                status: true,
            })
        } else {
            console.log(err);
        }
    })
}
module.exports = {
    get
}