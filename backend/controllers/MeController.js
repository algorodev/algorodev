const me = require ('../models/Me.js');

const MeController = {
    async create(req, res) {
        try {
            let me = await me.create(req.body);
            res.status(201).send(me);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async read(req, res) {
        try {
            let me = await me.find({ });
            res.status(200).send(me);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            let meUpdated = await me.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send(meUpdated);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async delete(req, res) {
        try {
            let meDeleted = await me.findByIdAndDelete(req.body._id);
            res.status(201).send(meDeleted);
        } catch (error) {
            res.status(500).send(500);
        }
    }
};

module.exports = MeController;
