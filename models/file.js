const mongoose = require('mongoose');

const File = mongoose.model('file',{
    name: String,
    type: String,
    created_at: Date,
    updated_at: Date,
 });

 module.exports = File