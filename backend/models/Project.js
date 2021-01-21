const mongoose = require('mongoose');

const Project = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
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


const ProjectModel = mongoose.model('Project', Project);
module.exports = ProjectModel;
