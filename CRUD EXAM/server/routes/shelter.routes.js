const ShelterSchemaController = require('../controllers/shelter.controller');
 
module.exports = app => {
    app.get('/api/allShelters', ShelterSchemaController.findAllShelters);
    app.get('/api/oneSingleShelter/:id', ShelterSchemaController.findOneSingleShelter);
    app.put('/api/updateShelter/:id', ShelterSchemaController.updateExistingShelter);
    app.post('/api/newlyCreatedShelter', ShelterSchemaController.createNewShelter);
    app.delete('/api/deleteAnExistingShelter/:id', ShelterSchemaController.deleteAnExistingShelter);
}