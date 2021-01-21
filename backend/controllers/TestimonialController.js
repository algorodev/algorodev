const testimonial = require('../models/Testimonial.js');

const TestimonialController = {
    async create(req, res) {
        try {
            let testimonial = await testimonial.create(req.body);
            res.status(201).send(testimonial);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async read(req, res) {
        try {
            let testimonials = await testimonial.find({ });
            res.status(200).send(testimonials);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            let testimonialUpdated = await testimonial.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send(testimonialUpdated);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async delete(req, res) {
        try {
            let testimonialDeleted = await testimonial.findByIdAndDelete(req.body._id);
            res.status(201).send(testimonialDeleted);
        } catch (error) {
            res.status(500).send(500);
        }
    }
};

module.exports = TestimonialController;
