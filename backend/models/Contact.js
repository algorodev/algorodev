const mongoose = require('mongoose');

const Contact = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        subject: {
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

const ContactModel = mongoose.model('Contact', Contact);
module.exports = ContactModel;
