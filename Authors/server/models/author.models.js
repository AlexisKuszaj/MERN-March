const mongoose = require('mongoose');
 
const Person = new mongoose.Schema({
    author: {
        type: String
    }
   
},{timestamps:true});

const Writer = mongoose.model('Writer', Person);

module.exports = Writer;