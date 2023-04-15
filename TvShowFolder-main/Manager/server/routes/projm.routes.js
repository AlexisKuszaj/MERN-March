const ManagerSchemaController = require('../controllers/projm.controller');
 
module.exports = app => {
    app.get('/api/allManagers', ManagerSchemaController.findAllManagers);
    app.get('/api/oneSingleManager/:id', ManagerSchemaController.findOneSingleManager);
    app.put('/api/updateManager/:id', ManagerSchemaController.updateExistingManager);
    app.post('/api/newlyCreatedManager', ManagerSchemaController.createNewManager);
    app.delete('/api/deleteAnExistingManager/:id', ManagerSchemaController.deleteAnExistingManager);
}