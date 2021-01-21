const language = require('../models/Language.js');

const LanguageController = {
    async create(req, res) {
        try {
            let language = await language.create(req.body);
            res.status(201).send(language);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async read(req, res) {
        try {
            let languages = await language.find({ });
            res.status(200).send(languages);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            let languageUpdated = await language.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send(languageUpdated);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async delete(req, res) {
        try {
            let languageDeleted = await language.findByIdAndDelete(req.body._id);
            res.status(201).send(languageDeleted);
        } catch (error) {
            res.status(500).send(500);
        }
    }
};

module.exports = LanguageController;
