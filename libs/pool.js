const {Pool} = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'andrei',
    password: 'leprechaun1',
    database: 'database'
})

module.exports = pool;