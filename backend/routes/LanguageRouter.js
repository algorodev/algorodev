const express = require('express');

const LanguageController = require('../controllers/LanguageController.js');

const router = express.Router();

router.post('/create', LanguageController.create);
router.get('/read', LanguageController.read);
router.put('/update', LanguageController.update);
router.delete('/delete', LanguageController.delete);

module.exports = router;
