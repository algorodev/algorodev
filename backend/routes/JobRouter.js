const express = require('express');

const JobController = require('../controllers/JobController.js');

const router = express.Router();

router.post('/create', JobController.create);
router.get('/read', JobController.read);
router.put('/update', JobController.update);
router.put('/delete', JobController.delete);

module.exports = router;
