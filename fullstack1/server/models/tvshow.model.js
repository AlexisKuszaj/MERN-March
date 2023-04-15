const mongoose = require('mongoose');
 
const TvShow = new mongoose.Schema({
    title: {
        type: String,
        required:[true,'title is required'],
        minLength:[3, 'the title must be 3 or more characters'],
        maxLength:[50, 'The title is too long']
    },
    releaseYear: {
        type: Number,
        required:[true,'releaseYear is required'],
        minLength:[3, 'the releaseYear must be 3 or more characters'],
        maxLength:[50, 'The releaseYear is too long']
    },
    network: {
        type:String,
        required:[true,'title is required'],
        minLength:[3, 'the creater must be 3 or more characters'],
        maxLength:[50, 'The creater is too long']
    },
    creator:{
        type:String,
        required:[true,'creater is required'],
        minLength:[3, 'the creater must be 3 or more characters'],
        maxLength:[50, 'The creater is too long']

    },
    genre:{
        type: String,
        required:[true,'Genre is required'],
        minLength:[3, 'the genre must be 3 or more characters'],
        maxLength:[50, 'The genre is too long']
    }
},{timestamps:true});

const Show = mongoose.model('Show', TvShow);

module.exports = Show;
