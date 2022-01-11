const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/blog.controller')

router.get('/', BlogController.getAll);
router.get(':id/', BlogController.getById);
router.post('/', BlogController.create);
router.put('/:id', BlogController.update);
router.delete('/:id', BlogController.delete);

module.exports = router;
