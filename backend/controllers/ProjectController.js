const ProjectModel = require('../models/Project.js');

const ProjectController = {
    async create(req, res) {
        try {
            let project = await ProjectModel.create(req.body);
            res.status(201).send(project);
        } catch (error) {
            res.status(500).send(error);
            console.error(error);
        }
    },
    async read(req, res) {
        try {
            let projects = await ProjectModel.find({ });
            res.status(200).send(projects);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            let projectUpdated = await ProjectModel.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send(projectUpdated);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async delete(req, res) {
        try {
            let projectDeleted = await ProjectModel.findByIdAndDelete(req.body._id);
            res.status(201).send(projectDeleted);
        } catch (error) {
            res.status(500).send(500);
        }
    }
};

module.exports = ProjectController;
