const fs = require('fs')
const path = require('path')
const xpathes = require('xpath')
const dom = require('xmldom').DOMParser
const File = require('../models/file')
const { FILES_PATH } = require('../config/path')
const parseString = require('xml2js').parseString

const get = async (req, res) => {
    const { file, xpath } = req.query
    const _file = await File.findOne({_id: file});
    const filePath = path.join(FILES_PATH, _file.name);
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err, _res){
        if (!err) {
            let xml = _res;
            let doc = new dom().parseFromString(xml)
            let nodes = xpathes.select(`/workbook/datasources/datasource[@name != 'Parameters']` , doc)
            let data = []
            for( let i = 0; i < nodes.length; i ++){
                let node = {}
                node.string = nodes[i].toString()
                data.push(node)
            }
            console.log('data', nodes)
            res.send({
                status: true,
                data: data
            })
        } else {
            res.status(500).send({
                status: false,
                error: err
            })
        }
    })
}
module.exports = {
    get
}