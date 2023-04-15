const ManagerSchemaController = require('../controllers/projectmanager.controller');
 
module.exports = app => {
    app.get('/api/allProjects', ManagerSchemaController.findAllProjects);
    // app.get('/api/allProjects:id', ManagerSchemaController.findOneSingleProject);
    // app.put('/api/allProjects:id', ManagerSchemaController.updateExistingProject);
    // app.post('/api/allProjects', ManagerSchemaController.createNewProject);
    // app.delete('/api/allProjects/:id', ManagerSchemaController.deleteAnExistingProject);
}