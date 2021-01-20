const mongoose = require('mongoose');

const Job = new mongoose.Schema(
    {
        company: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        done: {
            type: String,
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        }
    },
    {timestamps: true}
);

const model = mongoose.model('Job', Job);
module.exports = model;
