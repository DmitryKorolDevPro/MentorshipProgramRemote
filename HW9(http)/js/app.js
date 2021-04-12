const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const routes = require('./routes.js')(app, fs);
const port = 5500;

// await fs.readFile('./db.json');
// await fs.writeFile('./db.json', books + 1);

// app.post({}, (err, res, body) => {
//     if (err) return res.status(500).send({ message: err })

//     return res.send(body);
// });

// app.put('/', (req, res) => {
//     res.send('Hello put');
// });

// app.delete('/', (req, res) => {
//     res.send('Hello delete');
// });


const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

