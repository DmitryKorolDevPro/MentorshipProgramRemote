const $C = require('./public/scripts/Controller.js');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 4200;

app.use(express.static('public'));

app.get('/api/flowers', async (req, res) => {
  const request = await $C.getItems(req.query.id);
  res.status(request.statusCode).send(request.result);
})

app.post('/api/flowers', async (req, res) => {
  const request = await $C.addItem(req.query);
  res.status(request.statusCode).send(request.result);
})

app.put('/api/flowers', async (req, res) => {
  const request = await $C.updateItem(req.query);
  res.status(request.statusCode).send(request.result);
})

app.delete('/api/flowers', async (req, res) => {
  const request = await $C.deleteItem(req.query.id);
  res.status(request.statusCode).send(request.result);
})

app.listen(PORT, () => {
  console.info(`Started a server on port: ${PORT}`)
})