const course = require('../models/Course.js');

const CourseController = {
    async create(req, res) {
        try {
            let course = await course.create(req.body);
            res.status(201).send(course);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async read(req, res) {
        try {
            let courses = await course.find({ });
            res.status(200).send(courses);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            let courseUpdated = await course.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send(courseUpdated);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async delete(req, res) {
        try {
            let courseDeleted = await course.findByIdAndDelete(req.body._id);
            res.status(201).send(courseDeleted);
        } catch (error) {
            res.status(500).send(500);
        }
    }
};

module.exports = CourseController;
