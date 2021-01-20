const express = require('express');

const CourseController = require('../controllers/CourseController.js');

const router = express.Router();

router.post('/create', CourseController.create);
router.get('/read', CourseController.read);
router.put('/update', CourseController.update);
router.put('/delete', CourseController.delete);

module.exports = router;
