require ("dotenv").config()

const {PG_HOST, PG_PORT, PG_DB, PG_USER, PG_PW} = process.env
const credentials = {
    host:PG_HOST,
    port:PG_PORT,
    database:PG_DB,
    user:PG_USER,
    password:PG_PW
}
const {Client} = require("pg")
const conn = new Client(credentials)

conn.connect()
    .then(console.log(`Connecting to the ${PG_DB} database`))
    .catch(err => console.log(`Error connecting to ${PG_DB} database: `, err))

//Export the connection so it can be used in other files
module.exports = conn;