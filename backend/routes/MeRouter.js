const express = require('express');

const MeController = require('../controllers/MeController.js');

const router = express.Router();

router.post('/create', MeController.create);
router.get('/read', MeController.read);
router.put('/update', MeController.update);
router.delete('/delete', MeController.delete);

module.exports = router;
