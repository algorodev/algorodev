const mongoose = require('mongoose');

const Testimonial = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        }
    },
    {timestamps: true}
);

const TestimonialModel = mongoose.model('Testimonial', Testimonial);
module.exports = TestimonialModel;
