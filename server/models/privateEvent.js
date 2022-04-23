const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const privateEventSchema = new Schema({
    name: String,
    date: String,
    description: String
})

module.exports = mongoose.model('privateEvent', privateEventSchema, 'privateEvents')
