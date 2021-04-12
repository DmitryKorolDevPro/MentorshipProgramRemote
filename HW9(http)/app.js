const express = require('express');
const controller = require('./public/scripts/Controller.js');

const app = express();
const PORT = process.env.PORT || 4200;

app.use(express.static('public'));
app.set('views', './public/views');
app.set('view engine', 'ejs');

const viewRouter = require('./public/scripts/View');
app.use('/', viewRouter);

app.get('/api/flowers', async (req, res) => {
  const response = await controller.getItems(req.query.id);
    switch (response) {
      case 204:
        res.status(204).send('No Content.');
        break;
      case 400:
        res.status(400).send('ID must be a number.');
        break;
      case 404:
        res.status(404).send('Not Found.\nItem was not found.');
        break;
      default:
        res.status(200).send(response);
    }
})

app.post('/api/flowers', async (req, res) => {
  const response = await controller.addItem(req.query);
    switch (response) {
      case 201:
        res.status(201).send('Created.\nItem was successfully created.');
        break;
      case 400:
        res.status(400).send('Bad request.\nID, NAME, URL must be present.\nID must be a number.');
        break;
      case 406:
        res.status(406).send('Not Acceptable.\nItem already exists.');
        break;
      default:
        res.status(500).send('Internal Server Error.');
    }
})

app.put('/api/flowers', async (req, res) => {
  const response = await controller.updateItem(req.query);
    switch (response) {
      case 200:
        res.status(200).send('OK.\nItem was successfully updated.');
        break;
      case 400:
        res.status(400).send('Bad request.\nID, NAME or URL must be present.\nID must be a number.');
        break;
      case 404:
        res.status(404).send('Not Found.\nItem was not found.');
        break;
      default:
        res.status(500).send('Internal Server Error.');
    }
})

app.delete('/api/flowers', async (req, res) => {
  const response = await controller.deleteItem(req.query.id);
    switch (response) {
      case 200:
        res.status(200).send('OK.\nItem was successfully deleted.');
        break;
      case 400:
        res.status(400).send('Bad request.\nID must be present.\nID must be a number.');
        break;
      case 404:
        res.status(404).send('Not Found.\nItem was not found.');
        break;
      default:
        res.status(500).send('Internal Server Error.');
    }
})

app.listen(PORT, () => {
  console.info(`Started a server on port: ${PORT}`)
})