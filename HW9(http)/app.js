const $C = require('./public/scripts/Controller.js');

const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 4200;

app.use(express.static('public'));

app.get('/api/list', async (req, res) => {
  const items = await $C.getItems(req.query.id);
  res.send(items);
})

app.post('/api/list', async (req, _) => {
  console.log('post');
  $C.addItems(req.query);
})

// app.use(express.static(path.join(__dirname + 'public')));

// app.get('/', async (req, res) => {
//   const flowersDatabase = await fs.readFile('./db.json');
//   const stock = JSON.parse(flowersDatabase).stock;

//   res.sendFile(path.join(__dirname + 'public', 'index.html'))
//   // if (req.query.id === undefined) {
//   //   res.send(stock);
//   // } else {
//   //   const requestedId = +req.query.id;
//   //   const requestedItem = stock.find(item => item.id === requestedId);
//   //   res.send(requestedItem);
//   // }
// })

// app.post('/', async (req, _) => {
//   const flowersDatabase = await fs.readFile('./db.json');
//   const stock = JSON.parse(flowersDatabase).stock;

//   stock.push({
//     name: req.query.name ?? 'Default',
//     id: req.query.id ?? stock.length,
//     url: req.query.url ?? '',
//   });

//   await fs.writeFile('./db.json', JSON.stringify({
//     stock: stock
//   }));
// })

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

app.listen(PORT, () => {
  console.info(`Started a server on port: ${PORT}`)
})