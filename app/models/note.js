const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    details: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);