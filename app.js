const { Client } = require('pg')

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'postgres', 
})

client.connect( (err) => {
  if (err) console.log(err)
  else console.log('Connected!')
})