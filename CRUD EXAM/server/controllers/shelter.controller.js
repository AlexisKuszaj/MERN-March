const Shelter = require('../models/shelter.model');
 
module.exports.findAllShelters = (req, res) => {
    Shelter.find()
        .then((allShelters) => {
            res.json({ Shelters: allShelters })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 module.exports.findOneSingleShelter = (req, res) => {
    Shelter.findOne({ _id: req.params.id })
        .then(oneSingleShelter => {
            res.json({ user: oneSingleShelter })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createNewShelter = (req, res) => {
    Shelter.create(req.body)
        .then(newlyCreatedShelter => {
            res.json({shelter: newlyCreatedShelter })
        })
        .catch((err) => {
            res.status(400).json(err)
        });}
 
module.exports.updateExistingShelter = (req, res) => {
    Shelter.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedShelter => {
            res.json({ Shelter: updatedShelter })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deleteAnExistingShelter = (req, res) => {
    Shelter.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

    