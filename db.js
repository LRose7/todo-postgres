// can send a configuration to what and where we want to connect database
const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: 'postgres',
    password: 'donJuan777',
    database: 'todo',
    host: 'localhost',
    port: 5432

    // user: `${process.env.PGUSER}`,
    // password: `${process.env.PGPASSWORD}`,
    // database: `${process.env.PGDATABASE}`,
    // host: `${process.env.PGHOST}`,
    // port: `${process.env.PGPORT}`

    // user: process.env.PGUSER,
    // password: process.env.PGPASSWORD,
    // database: process.env.PGDATABASE,
    // host: process.env.PGHOST,
    // port: process.env.PGPORT
});

module.exports = pool;