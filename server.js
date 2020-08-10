const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Configure the db
const dbConfig = require('./config/database-config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect to the db
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a base route message
app.get('/', (req, res) => {
    res.json({"message": "This is a Simple Note App to be able to save, update, delete and get note(s)"});
});

require('./app/routes/routes.js')(app);

// listen for requests
app.listen(3030, () => {
    console.log("Server is listening on port 3030");
});