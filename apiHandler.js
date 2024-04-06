
const express = require('express');
const router = express.Router();
const authService = require('./authService');

router.post('/login', async (req, res) => {
    try {
        const username = req.query.username;
        const password = req.query.password;
        const user = { username: username, password : password };
        const token = await authService.generateToken(user);
        res.json({ token: token });
    } catch (error) {
        console.error('Error occurred during login:', error);
        if (error.message === 'Invalid credentials') {
            res.status(401).json({ error: 'Invalid credentials' });
        } else {
            res.status(500).json({ error: 'An internal server error occurred' });
        }
    }
  
});

router.get('/api/data', async (req, res, next) => {
    try {
      await authService.authenticateToken(req, res, next);
      res.json({ message: 'This is a protected route.', user: req.user });
    } catch (error) {
      console.error('Error occurred during authentication:', error);
      res.status(500).json({ error: 'An internal server error occurred.' });
    }
  });


module.exports = router;
