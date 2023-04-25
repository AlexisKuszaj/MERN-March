const mongoose = require('mongoose');
 
const person = new mongoose.Schema({
    author: {
        type: String
    }
   
},{timestamps:true});

const author = mongoose.model('author', person);

module.exports = author;