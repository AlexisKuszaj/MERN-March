const mongoose = require('mongoose');
 
const ManagerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    details: {
        type: String
    }
});
 
const Project = mongoose.model('Project', ManagerSchema);
 
module.exports = Project;