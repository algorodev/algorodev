const express = require('express');

const DegreeController = require('../controllers/DegreeController.js');

const router = express.Router();

router.post('/create', DegreeController.create);
router.get('/read', DegreeController.read);
router.put('/update', DegreeController.update);
router.put('/delete', DegreeController.delete);

module.exports = router;
