const mongoose = require('mongoose');

const Me = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        surname1: {
            type: String,
            required: true,
        },
        surname2: {
            type: String,
            required: true,
        },
        biography: {
            type: String,
            required: true,
        },
        citizenship: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        age: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

const MeModel = mongoose.model('Me', Me);
module.exports = MeModel;
