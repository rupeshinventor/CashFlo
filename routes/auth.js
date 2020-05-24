const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {signin} = require('../controllers/auth');

router.post('/signin', [
    check('email')
    .isEmail().withMessage('Invalid email'),
    check('password')
    .isLength({ min: 1 }).withMessage('Password field is required')
] , signin);

module.exports = router;