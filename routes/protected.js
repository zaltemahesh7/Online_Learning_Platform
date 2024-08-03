const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// An example protected route
router.get('/dashboard', auth, (req, res) => {
  res.json({ msg: 'Welcome to the dashboard' });
});

module.exports = router;
