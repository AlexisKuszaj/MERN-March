const TvShowController = require('../controllers/tvshow.controller');

module.exports = app => {
    app.get('/api/allShows', TvShowController.findAllShows);
    app.post('/api/newShow', TvShowController.createShow);
    app.get('/api/oneShow/:id', TvShowController.findOneShow);
    app.put('/api/updateShow/:id', TvShowController.updateShow);
    app.delete('/api/deleteShow/:id', TvShowController.deleteShow);
    const TvShowController = require('../controllers/tvshow.controller');

    module.exports = app => {
        app.get('/api/allShows', TvShowController.findAllShows);
        app.post('/api/newShow', TvShowController.createShow);
        app.get('/api/oneShow/:id', TvShowController.findOneShow);
        app.put('/api/updateShow/:id', TvShowController.updateShow);
        app.delete('/api/deleteShow/:id', TvShowController.deleteShow);
    }