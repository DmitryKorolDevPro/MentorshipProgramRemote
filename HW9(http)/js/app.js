const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const routes = require('./routes.js')(app, fs);
const port = 5501;

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
