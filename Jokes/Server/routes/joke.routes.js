const JokeController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('/api/allFunnys', JokeController.findAllFunnys);
    app.post('/api/newFunny', JokeController.createFunny);
    app.get('/api/oneFunny/:id', JokeController.findOneFunny);
    app.put('/api/updateFunny/:id', JokeController.updateFunny);
    app.delete('/api/deleteFunny/:id', JokeController.deleteFunny)
}