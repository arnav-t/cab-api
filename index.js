const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let port = 4000;

// Create app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/cabs');
mongoose.Promise = global.Promise;

// Use body parser
app.use(bodyParser.json());

// Set up routes
app.use('/api', require('./routes/api'));

// Listen on port
port = process.env.port || port;
app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});