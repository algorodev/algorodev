const mongoose = require('mongoose');

const Degree = new mongoose.Schema(
    {
        degree: {
            type: String,
            required: true,
        },
        academy: {
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

const DegreeModel = mongoose.model('Degree', Degree);
module.exports = DegreeModel;
