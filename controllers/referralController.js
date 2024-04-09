const express = require('express');
const router = express.Router();
const referralService = require('../referralService')


router.post('/createReferral', async (req, res) => {
    try {
        const response = await referralService.createReferral(req.query); 
        res.json(response);
    } catch (error) {
        console.error('Error occurred during referral creation:', error);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
  
});


module.exports = router;
