const mongoose = require('mongoose');

const monkeySchema = new mongoose.Schema({
    race: { type: String},
    size: { type: String},
    livingArea: { type: String}
});

const Monkey = mongoose.model('Monkey', monkeySchema);

module.exports = Monkey;
