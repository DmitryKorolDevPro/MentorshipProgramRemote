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
  const items = await controller.getItems(req.query.id);

  if (items === undefined) {
    res.status(204).send('No Content.');
  } else {
    res.status(200).send(items);
  }
})

app.post('/api/flowers', async (req, res) => {
  const response = {
    code: null,
    result: null
  };

  response.code = await controller.addItem(req.query);
    switch (response.code) {
      case 201:
        response.result = 'Created.\nItem was successfully created.';
        break;
      case 400:
        response.result = 'Bad request.\nSome parameters are missing. ID, NAME, URL must be present.';
        break;
      case 406:
        response.result = 'Not Acceptable.\nItem already exists.';
        break;
    }

  res.status(response.code).send(response.result);
})

app.put('/api/flowers', async (req, res) => {
  const response = {
    code: null,
    result: null
  };

  response.code = await controller.updateItem(req.query);
    switch (response.code) {
      case 200:
        response.result = 'OK.\nItem was successfully updated.';
        break;
      case 400:
        response.result = 'Bad request.\nSome parameters are missing. ID, NAME, URL must be present.';
        break;
      case 404:
        response.result = 'Not Found.\nItem was not found.';
        break;
    }
  res.status(response.code).send(response.result);
})

app.delete('/api/flowers', async (req, res) => {
  const response = {
    code: null,
    result: null
  };
  
  response.code = await controller.deleteItem(req.query.id);
    switch (response.code) {
      case 200:
        response.result = 'OK.\nItem was successfully deleted.';
        break;
      case 400:
        response.result = 'Bad request.\nSome parameters are missing. ID, NAME, URL must be present.';
        break;
      case 404:
        response.result = 'Not Found.\nItem was not found.';
        break;
    }
  res.status(response.code).send(response.result);
})

app.listen(PORT, () => {
  console.info(`Started a server on port: ${PORT}`)
})