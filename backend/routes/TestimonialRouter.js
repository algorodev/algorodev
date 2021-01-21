const express = require('express');

const TestimonialController = require('../controllers/TestimonialController.js');

const router = express.Router();

router.post('/create', TestimonialController.create);
router.get('/read', TestimonialController.read);
router.put('/update', TestimonialController.update);
router.delete('/delete', TestimonialController.delete);

module.exports = router;
