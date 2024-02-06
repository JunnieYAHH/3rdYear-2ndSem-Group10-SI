const express = require('express');
const router = express.Router();

const {
    registerUser
} = require('../controllers/userController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')
router.route('/register').post(registerUser);
module.exports = router;