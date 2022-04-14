const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

const { userLogin ,tokenRefresh} = require('../middleware/auth');

dotenv.config();

router.post('/signin', userLogin, async (req, res) => {
  res.json({
    message: 'SignIn',
    content: req.content,
    JWT: req.token,
    refresh: req.refreshToken,
  });
});
router.post('/refresh', tokenRefresh, async (req, res) => {
  res.json({
    message: 'Refresh',
    content: req.content,
    JWT: req.token,
    refresh: req.refreshToken,
  });
});


module.exports = router;