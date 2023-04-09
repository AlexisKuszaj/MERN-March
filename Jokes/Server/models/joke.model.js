const mongoose = require('mongoose');
 
const Joke = new mongoose.Schema({
  setup: {
        type: String
    },
    punchline: {
        type: String
    }
});

const Funny = mongoose.model('Funny', Joke);

module.exports = Funny;