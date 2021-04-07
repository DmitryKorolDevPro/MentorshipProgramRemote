console.log('+ Model');

const express = require('express')
const fs = require('fs').promises
const app = express()

const $C = require('./Controller')

class Model {

}

app.get('/index', async (req, res) => {
  const flowersDatabase = await fs.readFile('./db.json');
  const stock = JSON.parse(flowersDatabase).stock;

  if (req.query.id === undefined) {
    res.send(stock);
  } else {
    const requestedId = +req.query.id;
    const requestedItem = stock.find(item => item.id === requestedId);
    res.send(requestedItem);
  }
})

app.post('/index', async (req, _) => {
  const flowersDatabase = await fs.readFile('./db.json');
  const stock = JSON.parse(flowersDatabase).stock;

  stock.push({
    name: req.query.name ?? 'Default',
    id: req.query.id ?? stock.length,
    url: req.query.url ?? '',
  });

  await fs.writeFile('./db.json', JSON.stringify({
    stock: stock
  }));
})

app.put('/index', async (req, res) => {
  const flowersDatabase = await fs.readFile('./db.json');
  const stock = JSON.parse(flowersDatabase).stock;

  const requestedId = +req.query.id; // index of the item in the stock
  const itemToUpdate = stock.find(item => item.id === requestedId);

  if (itemToUpdate === undefined) {
    throw new Error('No such item in the stock')
    return;
  }

  const itemIndex = stock.indexOf(itemToUpdate);
  stock[itemIndex] = {
    name: req.query.name ?? stock[itemIndex].name,
    id: req.query.id ?? stock[itemIndex].id,
    url: req.query.url ?? stock[itemIndex].url,
  }

  await fs.writeFile('./db.json', JSON.stringify({
    stock: stock
  }));
})

app.delete('/index', async (req, res) => {
  const flowersDatabase = await fs.readFile('./db.json');
  const stock = JSON.parse(flowersDatabase).stock;

  stock.splice(+req.query.id, 1)

  await fs.writeFile('./db.json', JSON.stringify({
    stock: stock
  }));
})



module.exports.$M = new Model;