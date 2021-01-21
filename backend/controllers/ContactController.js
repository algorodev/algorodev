const ContactModel = require('../models/Contact.js');

const ContactController = {
    async create(req, res) {
        try {
            let contact = await ContactModel.create(req.body);
            res.status(201).send(contact);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async read(req, res) {
        try {
            let contacts = await ContactModel.find({ });
            res.status(200).send(contacts);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            let contactUpdated = await ContactModel.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send(contactUpdated);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async delete(req, res) {
        try {
            let contactDeleted = await ContactModel.findByIdAndDelete(req.body._id);
            res.status(201).send(contactDeleted);
        } catch (error) {
            res.status(500).send(500);
        }
    }
};

module.exports = ContactController;
