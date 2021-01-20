const job = require('../models/Job.js');

const JobController = {
    async create(req, res) {
        try {
            let job = await job.create(req.body);
            res.status(201).send(job);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async read(req, res) {
        try {
            let jobs = await job.find({ });
            res.status(200).send(jobs);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            let jobUpdated = await job.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send(jobUpdated);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async delete(req, res) {
        try {
            let jobDeleted = await job.findByIdAndDelete(req.body._id);
            res.status(201).send(jobDeleted);
        } catch (error) {
            res.status(500).send(500);
        }
    }
};

module.exports = JobController;
