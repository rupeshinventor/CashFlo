const express = require('express');
const router = express.Router();
const check = require('express-validator');

const {generateImageThumbnail} = require('../controllers/image');

router.post('/image', generateImageThumbnail);

module.exports = router;