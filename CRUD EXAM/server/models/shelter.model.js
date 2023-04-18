const mongoose = require('mongoose');

const ShelterSchema = new mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    description: {
        type: String
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    }
});

const Shelter = mongoose.model('Shelter', ShelterSchema);

module.exports = Shelter;