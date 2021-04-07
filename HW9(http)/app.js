const $C = require('./public/scripts/Controller.js');

const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 4200;

app.use(express.static('public'));

app.get('/api/list', async (req, res) => {
  const request = await $C.getItems(req.query.id);
  res.status(request.statusCode).send(request.result);
})

app.post('/api/list', async (req, res) => {
  const request = await $C.addItems(req.query);
  res.status(request.statusCode).send(request.result);
})

app.listen(PORT, () => {
  console.info(`Started a server on port: ${PORT}`)
})

// app.put('/', async (req, res) => {
//   const flowersDatabase = await fs.readFile('./db.json');
//   const stock = JSON.parse(flowersDatabase).stock;

//   const requestedId = +req.query.id; // index of the item in the stock
//   const itemToUpdate = stock.find(item => item.id === requestedId);

//   if (itemToUpdate === undefined) {
//     throw new Error('No such item in the stock');
//     return;
//   }

//   const itemIndex = stock.indexOf(itemToUpdate);
//   stock[itemIndex] = {
//     name: req.query.name ?? stock[itemIndex].name,
//     id: req.query.id ?? stock[itemIndex].id,
//     url: req.query.url ?? stock[itemIndex].url,
//   }

//   await fs.writeFile('./db.json', JSON.stringify({
//     stock: stock
//   }));
// })

// app.delete('/', async (req, res) => {
//   const flowersDatabase = await fs.readFile('./db.json');
//   const stock = JSON.parse(flowersDatabase).stock;

//   stock.splice(+req.query.id, 1)

//   await fs.writeFile('./db.json', JSON.stringify({
//     stock: stock
//   }));
// })

