const DB = require('../DBService');

const schemas = `
CREATE TABLE IF NOT EXISTS Referral (
    id SERIAL PRIMARY KEY,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,
    job_id INTEGER,
    referrer VARCHAR(255),
    referree_candidate_id INTEGER,
    comp_policy_id INTEGER,
    referree_email VARCHAR(255),
    primary_handler VARCHAR(255),
    secondary_handler VARCHAR(255),
    status VARCHAR(50)
);

-- ReferralRewardsTable table
CREATE TABLE IF NOT EXISTS ReferralRewardsTable (
    id SERIAL PRIMARY KEY,
    job_id INTEGER,
    reward_type VARCHAR(50),
    reward_value NUMERIC,
    reward_policy VARCHAR(50),
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

-- Candidate table
CREATE TABLE IF NOT EXISTS Candidate (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email_contact VARCHAR(255),
    dob DATE,
    gender VARCHAR(10),
    resume_doc_id INTEGER,
    work_exp INTEGER,
    current_ctc NUMERIC,
    is_referred BOOLEAN,
    expected_ctc NUMERIC,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

-- Job table
CREATE TABLE IF NOT EXISTS Job (
    id SERIAL PRIMARY KEY,
    job_title VARCHAR(255),
    job_description TEXT,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    min_work_exp INTEGER
);

-- CompensationPolicy table
CREATE TABLE IF NOT EXISTS CompensationPolicy (
    id SERIAL PRIMARY KEY,
    job_id INTEGER,
    min_ctc NUMERIC,
    max_ctc NUMERIC,
    education_tier VARCHAR(50),
    experience_tier VARCHAR(50)
);

-- JourneyDefinition table
CREATE TABLE IF NOT EXISTS JourneyDefinition (
    id SERIAL PRIMARY KEY,
    job_id INTEGER,
    stage_def_ids INTEGER[],
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- StageDefinition table
CREATE TABLE IF NOT EXISTS StageDefinition (
    id SERIAL PRIMARY KEY,
    stage_type VARCHAR(50),
    job_id INTEGER,
    is_optional BOOLEAN,
    stage_duration INTERVAL,
    interviewer VARCHAR(255),
    section_def_ids INTEGER[]
);

-- SectionDefinition table
CREATE TABLE IF NOT EXISTS SectionDefinition (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    data TEXT,
    submission_ids INTEGER[],
    template BOOLEAN
);

-- Journey table
CREATE TABLE IF NOT EXISTS Journey (
    id SERIAL PRIMARY KEY,
    candidate_id INTEGER,
    jdef_id INTEGER,
    status VARCHAR(50)
);

-- Stage table
CREATE TABLE IF NOT EXISTS Stage (
    id SERIAL PRIMARY KEY,
    j_id INTEGER,
    handler_email_id VARCHAR(255),
    interview_ VARCHAR(255),
    stage_def_id INTEGER,
    status VARCHAR(50)
);

-- Section table
CREATE TABLE IF NOT EXISTS Section (
    id SERIAL PRIMARY KEY,
    stage_id INTEGER,
    section_def_id INTEGER,
    status VARCHAR(50)
);
`

const CreateDBSchemas = () => {
    DB.query(schemas, (err, res) => {
        if (err) {
          console.error('Error executing schemas:', err);
        } else {
          console.log('Tables created successfully');
        }
      });
}


module.exports = CreateDBSchemas;
