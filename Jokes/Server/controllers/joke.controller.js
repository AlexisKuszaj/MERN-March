const Funny = require('../models/joke.model');

module.exports.findAllFunnys = (req, res) => {
    Funny.find()
        .then((allFunnys) => {
            res.json({ Funny: allFunnys })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
module.exports.createFunny = (req, res) => {
    Funny.create(req.body)
        .then((newFunny) => {
            res.json({funny:newFunny})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
module.exports.findOneFunny = (req, res) => {
    Funny.findOne({ _id: req.params.id })
        .then(oneFunny => {
            res.json({ Funny: oneFunny })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

        module.exports.updateFunny = (req, res) => {
            Funny.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true, runValidators: true }
            )
                .then(updatedFunny => {
                    res.json({ Funny: updatedFunny })
                })
                .catch((err) => {
                    res.json({ message: 'Something went wrong', error: err })
                });}

                module.exports.deleteFunny = (req, res) => {
                    Funny.deleteOne({ _id: req.params.id })
                        .then(result => {
                            res.json({ result: result })
                        })
                        .catch((err) => {
                            res.json({ message: 'Something went wrong', error: err })
                        });}