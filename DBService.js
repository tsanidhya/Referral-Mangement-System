const { Pool } = require('pg');

const pool = new Pool({
  user: 'referral_a6pl_user',
  host: 'dpg-co8mi18l5elc7391kdsg-a.singapore-postgres.render.com',
  database: 'referral_a6pl',
  password: 'lswm3crVhU0yt4S3bfzvMcgZTP1ReWvi',
  port: 5432, 
  ssl: {
    rejectUnauthorized: false, // You may need to adjust this option based on your server's certificate setup
  },

});


module.exports = pool;
