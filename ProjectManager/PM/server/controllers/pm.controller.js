const Manager = require('../models/pm.model');

module.exports.findAllManager = (req, res) => {
    Manager.find()
        .then((allManagers) => {
            res.json({ managers: allManagers })
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        });
}

module.exports.createManager = (req, res) => {
    Manager.create(req.body)
        .then((newManager) => {
            res.json({ manager: newManager })
        })
        .catch((err) => {
            res.status(400).json({ error: err.message })
        });
}

module.exports.findOneManager = (req, res) => {
    Manager.findOne({ _id: req.params.id })
        .then((oneManager) => {
            res.json({ manager: oneManager })
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        });
}

module.exports.updateManager = (req, res) => {
    Manager.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { runValidators: true }
    )
        .then((updatedManager) => {
            res.json({ manager: updatedManager })
        })
        .catch((err) => {
            res.status(400).json({ error: err.message })
        });
}

module.exports.deleteManager = (req, res) => {
    Manager.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        });
}