const express = require('express');

const BookController = require('../controllers/BookController.js');

const router = express.Router();

router.post('/create', BookController.create);
router.get('/read', BookController.read);
router.put('/update', BookController.update);
router.put('/delete', BookController.delete);

module.exports = router;
