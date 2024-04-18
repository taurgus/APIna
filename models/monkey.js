const mongoose = require('mongoose');

const monkeySchema = new mongoose.Schema({
    race: { type: String, required: true },
    size: { type: String, required: true },
    livingArea: { type: String, required: true }
});

const Monkey = mongoose.model('Monkey', monkeySchema);

module.exports = Monkey;
