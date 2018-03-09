const express = require('express');
const morgan = require('morgan');
const client = require('./client.js');
const indexFile = require('./views/index.js')
const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.send(indexFile.main())
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})