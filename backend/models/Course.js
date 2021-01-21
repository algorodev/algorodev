const mongoose = require('mongoose');

const Course = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        teacher: {
            type: String,
            required: true,
        },
        platform: {
            type: String,
            required: true,
        },
        technologies: {
            type: [String],
            required: true,
        }
    },
    {timestamps: true}
);

const CourseModel = mongoose.model('Course', Course);
module.exports = CourseModel;
