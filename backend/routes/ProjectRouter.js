const express = require('express');

const ProjectController = require('../controllers/ProjectController.js');

const router = express.Router();

router.post('/create', ProjectController.create);
router.get('/read', ProjectController.read);
router.put('/update', ProjectController.update);
router.delete('/delete', ProjectController.delete);

module.exports = router;
