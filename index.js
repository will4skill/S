const express = require('express');
const app = express();
const cors = require('cors');
const services = require('./routes/services.js');

app.use(cors());
app.use(express.json());
app.use('/api/services', services);


const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
