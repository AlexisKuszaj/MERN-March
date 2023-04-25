const Person = require('../models/author.models');

module.exports.findAllAuthor = (req, res) => {
    Person.find()
        .then((allAuthor) => {
            res.json({ person: allAuthor })
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        });
}

module.exports.createAuthor = (req, res) => {
    Person.create(req.body)
        .then((newAuthor) => {
            res.json({ person: newAuthor })
        })
        .catch((err) => {
            res.status(400).json({ error: err.message })
        });
}

module.exports.findOneAuthor = (req, res) => {
    Person.findOne({ _id: req.params.id })
        .then((oneAuthor) => {
            res.json({ person: oneAuthor })
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        });
}

module.exports.updateAuthor = (req, res) => {
    Person.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { runValidators: true }
    )
        .then((updatedAuthor) => {
            res.json({ person: updatedAuthor })
        })
        .catch((err) => {
            res.status(400).json({ error: err.message })
        });
}

module.exports.deleteAuthor = (req, res) => {
    Person.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        });
}