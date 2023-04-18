const PMController = require('../controllers/pm.controller');

module.exports = app => {
    app.get('/api/allManagers', PMController.findAllManager);
    app.post('/api/newManager', PMController.createManager);
    app.get('/api/oneManager/:id', PMController.findOneManager);
    app.put('/api/updateManager/:id', PMController.updateManager);
    app.delete('/api/deleteManager/:id', PMController.deleteManager)
}