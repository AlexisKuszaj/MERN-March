const Project = require('../models/projectmanager');
 
module.exports.findAllProjects = (req, res) => {
    Project.find()
        .then((allProjects) => {
            res.json({ projects: allProjects })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}