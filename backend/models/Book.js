const mongoose = require('mongoose');

const Book = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        }
    },
    {timestamps: true}
);

const model = mongoose.model('Book', Book);
module.exports = model;
