const book = require('../models/Book.js');

const BookController = {
    async create(req, res) {
        try {
            let book = await book.create(req.body);
            res.status(201).send(book);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async read(req, res) {
        try {
            let books = await book.find({ });
            res.status(200).send(books);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            let bookUpdated = await book.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send(bookUpdated);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async delete(req, res) {
        try {
            let bookDeleted = await book.findByIdAndDelete(req.body._id);
            res.status(201).send(bookDeleted);
        } catch (error) {
            res.status(500).send(500);
        }
    }
};

module.exports = BookController;
