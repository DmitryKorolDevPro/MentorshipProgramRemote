const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 5501;

// await fs.readFile('./db.json');
// await fs.writeFile('./db.json', books + 1);

app.get('/', async (req, res) => {
    console.log(req.query);
    const data = await fs.readFile('./db.json');

    res.send(data);
})

app.post('/', (req, res) => {
    res.send('Hello post');
});

app.put('/', (req, res) => {
    res.send('Hello put');
});

app.delete('/', (req, res) => {
    res.send('Hello delete');
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

