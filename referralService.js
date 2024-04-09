const ReferralManager = require('./models/referralModel')
const referralManager = new ReferralManager();


class Referral {
    async createReferral(requestObj) {
        // data transformations
        const queryParams = {
            id: 1,
            referrerName: requestObj.name,
            candidate_id: 1,
            comp_policy_id: 99,
            referree_email: requestObj.email,
            primary_handler: requestObj.primary_handler ?? null,
            secondary_handler: 'Handler 2',
            status: 'Initiated'
        };
        await referralManager.createReferral(queryParams);    
    }
    async updateReferralStatus(requestObj) {

        await referralManager.updateReferralStatus(queryParams); 
    }
    async fetchReferralData(requestObj){
        
        await referralManager.getReferralInfo(queryParams); 

    }
}

module.exports = new Referral();

