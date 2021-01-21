const degree = require('../models/Degree.js');

const DegreeController = {
    async create(req, res) {
        try {
            let degree = await degree.create(req.body);
            res.status(201).send(degree);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async read(req, res) {
        try {
            let degrees = await degree.find({ });
            res.status(200).send(degrees);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            let degreeUpdated = await degree.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send(degreeUpdated);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async delete(req, res) {
        try {
            let degreeDeleted = await degree.findByIdAndDelete(req.body._id);
            res.status(201).send(degreeDeleted);
        } catch (error) {
            res.status(500).send(500);
        }
    }
};

module.exports = DegreeController;
