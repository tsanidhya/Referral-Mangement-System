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

router.post('/updateReferralStatus', async (req, res) => {
    try {
        const response = await referralService.updateReferralStatus(req.query); 
        res.json({'Referral status' : 'updated'});
    } catch (error) {
        console.error('Error occurred during status update', error);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
  
});

router.get('/getReferrallInfo', async (req, res) => {
    try {
        const response = await referralService.fetchReferralData(req.query); 
        res.json({'Data' : response});
    } catch (error) {    
        console.error('Error occurred while fetching referral data', error);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
  
});


module.exports = router;
