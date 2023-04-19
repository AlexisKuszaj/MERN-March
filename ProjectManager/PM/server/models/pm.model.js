const mongoose = require('mongoose');
 
const PM = new mongoose.Schema({
    product: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type:String
    },
   
},{timestamps:true});

const Manager = mongoose.model('Manager', PM);

module.exports = Manager;