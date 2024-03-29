const AuthorController = require('../controller/author.controller');

module.exports = app => {
    app.get('/api/allAuthor', AuthorController.findAllAuthor);
    app.post('/api/newAuthor', AuthorController.createAuthor);
    app.get('/api/oneAuthor/:id', AuthorController.findOneAuthor);
    app.put('/api/updateAuthor/:id', AuthorController.updateAuthor);
    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor)
}