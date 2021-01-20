const express = require('express');

const ContactController = require('../controllers/ContactController.js');

const router = express.Router();

router.post('/create', ContactController.create);
router.get('/read', ContactController.read);
router.put('/update', ContactController.update);
router.put('/delete', ContactController.delete);

module.exports = router;
