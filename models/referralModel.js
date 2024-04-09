const DB = require('../DBService');

class ReferralManager{
    async createReferral(queryParams){
        const query = `INSERT INTO Referral (job_id, referrer, referree_candidate_id, comp_policy_id, referree_email, primary_handler, secondary_handler, status)
        VALUES (${queryParams.id},'${queryParams.referrerName}', ${queryParams.candidate_id},
            ${queryParams.comp_policy_id}, '${queryParams.referree_email}', '${queryParams.primary_handler}',
            '${queryParams.secondary_handler}', '${queryParams.status}');`
        DB.query(query, (err, res) => {
            if (err) {
              console.error('Error creating referral', err);
            } else {
              console.log('referral created successfully');
            }
        });
    }

    async updateReferralStatus(queryParams){
        const query = `UPDATE Referral
                        SET status = '${queryParams}'
                        WHERE id = ${queryParams};`
        DB.query(query, (err, res) => {
            if (err) {
              console.error('Error creating referral', err);
            } else {
              console.log('referral created successfully');
            }
        });
    }

    async getReferralInfo(queryParams){
        const query = `SELECT r.*
        FROM Referral r
        JOIN Candidate c ON r.referree_candidate_id = c.id
        WHERE c.name = '${queryParams}';`
        DB.query(query, (err, res) => {
            if (err) {
              console.error('Error fetching referral info', err);
            }
            return res;
        });
    }


}

module.exports = ReferralManager;